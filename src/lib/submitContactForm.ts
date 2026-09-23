import { CONTACT_EMAIL } from '@/config/contact';

export type ContactPayload = {
  fullName: string;
  businessType: string;
  email: string;
  phone: string;
  message: string;
  bodyText: string;
};

/**
 * Sends the enquiry to CONTACT_EMAIL via Web3Forms (if VITE_WEB3FORMS_ACCESS_KEY is set)
 * or FormSubmit otherwise. mailto: links do not deliver mail — this does.
 */
export async function submitContactForm(payload: ContactPayload): Promise<void> {
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

  if (web3Key) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: web3Key,
        subject: `Portfolio contact: ${payload.fullName} — ${payload.businessType}`,
        name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        message: payload.bodyText,
        from_name: 'Portfolio contact form',
        business_type: payload.businessType,
      }),
    });
    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!data.success) {
      throw new Error(data.message || 'Could not send your message. Try WhatsApp or email us directly.');
    }
    return;
  }

  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        _subject: `Portfolio contact: ${payload.fullName} (${payload.businessType})`,
        message: payload.bodyText,
        _template: 'table',
        _captcha: 'false',
      }),
    }
  );

  let data: { success?: boolean; message?: string; error?: string } = {};
  try {
    data = (await res.json()) as typeof data;
  } catch {
    /* FormSubmit sometimes returns non-JSON on errors */
  }

  if (!res.ok) {
    throw new Error(
      data.message || data.error || 'Email could not be sent. Use WhatsApp or add a Web3Forms key (see .env.example).'
    );
  }
}

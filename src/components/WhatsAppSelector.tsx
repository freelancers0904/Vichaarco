import { CONTACT_EMAIL } from '@/config/contact';

interface WhatsAppSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  /** When set (e.g. after contact form submit), WhatsApp links and email include this text. */
  prefilledMessage?: string | null;
  /** Called when the visitor picks WhatsApp or email to send the enquiry. */
  onSendChoice?: () => void;
}

const WhatsAppSelector = ({
  isOpen,
  onClose,
  prefilledMessage,
  onSendChoice,
}: WhatsAppSelectorProps) => {
  if (!isOpen) return null;

  const contacts = [
    { name: 'Mahesh', phone: '917499289391', emoji: '👨‍💼' },
    { name: 'Palak', phone: '918660121462', emoji: '👩‍💼' },
  ];

  const hasPrefill = Boolean(prefilledMessage?.trim());
  const encodedPrefill = hasPrefill ? encodeURIComponent(prefilledMessage!.trim()) : '';
  const mailtoHref = hasPrefill
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('New enquiry — portfolio contact form')}&body=${encodedPrefill}`
    : `mailto:${CONTACT_EMAIL}`;

  const handleChannelClick = () => {
    onSendChoice?.();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[1998] bg-black/40"
        onClick={onClose}
        style={{ backdropFilter: 'blur(4px)' }}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1999] w-[90vw] max-w-sm rounded-2xl shadow-2xl"
        style={{
          background: 'hsl(var(--background))',
          border: '1px solid rgba(149,124,61,0.2)',
        }}>
        {/* Header */}
        <div className="px-8 py-6 border-b" style={{ borderColor: 'rgba(149,124,61,0.15)' }}>
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-xl" style={{ color: 'hsl(var(--text-primary))' }}>
              {hasPrefill ? 'Send your message' : 'Chat with Us'}
            </h2>
            <button
              onClick={onClose}
              className="text-2xl transition-colors"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              ✕
            </button>
          </div>
          <p className="font-body text-sm mt-1" style={{ color: 'hsl(var(--text-secondary))' }}>
            {hasPrefill
              ? 'Choose WhatsApp or email — your enquiry is filled in; just tap send in the app that opens.'
              : 'Choose a team member to chat with'}
          </p>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-4">
          {hasPrefill && (
            <a
              href={mailtoHref}
              onClick={handleChannelClick}
              className="w-full p-4 rounded-xl transition-all duration-300 flex items-center gap-4 group"
              style={{
                background: 'hsl(var(--card), 0.5)',
                border: '1.5px solid rgba(201,168,76,0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'hsl(var(--card), 0.8)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'hsl(var(--card), 0.5)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
              }}
            >
              <span className="text-3xl">✉️</span>
              <div className="text-left">
                <div className="font-display font-semibold text-base" style={{ color: 'hsl(var(--text-primary))' }}>
                  Send by email
                </div>
                <div className="font-body text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                  {CONTACT_EMAIL}
                </div>
              </div>
              <div className="ml-auto flex items-center justify-center w-10 h-10 rounded-full" style={{ background: '#C9A84C' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#001020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
            </a>
          )}
          {contacts.map((contact) => (
            <a
              key={contact.phone}
              href={
                hasPrefill
                  ? `https://wa.me/${contact.phone}?text=${encodedPrefill}`
                  : `https://wa.me/${contact.phone}`
              }
              target="_blank"
              rel="noopener noreferrer"
              onClick={hasPrefill ? handleChannelClick : onClose}
              className="w-full p-4 rounded-xl transition-all duration-300 flex items-center gap-4 group"
              style={{
                background: 'hsl(var(--card), 0.5)',
                border: '1.5px solid rgba(201,168,76,0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'hsl(var(--card), 0.8)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'hsl(var(--card), 0.5)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)';
              }}
            >
              <span className="text-3xl">{contact.emoji}</span>
              <div className="text-left">
                <div className="font-display font-semibold text-base" style={{ color: 'hsl(var(--text-primary))' }}>
                  {contact.name}
                </div>
                <div className="font-body text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                  +91 {contact.phone.slice(2, 5)} {contact.phone.slice(5, 8)} {contact.phone.slice(8)}
                </div>
              </div>
              <div className="ml-auto flex items-center justify-center w-10 h-10 rounded-full" style={{ background: '#25D366' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t" style={{ borderColor: 'rgba(149,124,61,0.15)' }}>
          <p className="font-body text-xs text-center" style={{ color: 'hsl(var(--text-muted))' }}>
            We typically reply within 30 minutes
          </p>
        </div>
      </div>
    </>
  );
};

export default WhatsAppSelector;

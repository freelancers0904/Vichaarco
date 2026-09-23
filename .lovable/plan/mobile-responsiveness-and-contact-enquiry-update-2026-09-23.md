# Mobile responsiveness and contact enquiry update

## Mobile-only fixes

- Remove the header “Chat on WhatsApp” button on phone widths while keeping the existing desktop/tablet navigation unchanged.
- Stop the Work category filters from sticking and floating over project cards on phones.
- Keep all four filters in a compact, stable two-column layout with equal sizing and clean wrapping on narrow screens.
- Preserve the existing sticky filter behavior on tablet and desktop.

## Contact form update — all views

- Add a required **Contact Number** field with a visible label, mobile phone keypad support, autocomplete, sensible length limits, and clear validation.
- Include the number in the enquiry text and in the existing email submission.
- After the email is accepted, open the existing contact chooser with the completed enquiry prefilled, including the visitor’s phone number.
- Let the visitor choose Mahesh or Palak in WhatsApp and press Send there. This is the selected reliable browser flow; WhatsApp links cannot silently send one message to two chats.
- Keep the email fallback available if email delivery fails, and only show the final success state after the visitor completes or closes the contact step appropriately.

## Technical details

- Fix the mobile visibility conflict caused by the shared button CSS overriding the navigation’s mobile `hidden` class.
- Add phone validation to the form logic as well as the input attributes; reject empty, implausibly short, or excessively long values before submission.
- Extend the contact payload and both current email-provider request bodies with the phone number.
- Remove the TypeScript non-null assertion currently used when encoding the WhatsApp prefill while touching that flow.
- Keep all styling within the existing royal-blue, gold, Clash Display, and Inter system; no unrelated content or section changes.

## Verification

- Test phone, tablet, and laptop widths.
- Verify the phone header has only the logo and menu control, while larger views retain the WhatsApp button.
- Scroll through the full Work section and confirm filters never cover project content on mobile.
- Switch every Work category and confirm each preview remains visible and usable.
- Test contact validation, email submission handling, prefilled WhatsApp links for both Mahesh and Palak, keyboard focus, and success/error states.
- Check runtime console errors and the final build status.

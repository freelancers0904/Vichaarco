import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  {
    question: 'Do I need technical knowledge?',
    answer: 'No. You don’t need to handle anything technical. We take care of design, setup, and launch — you just focus on your business.',
  },
  {
    question: 'How long does it take?',
    answer: 'Most websites go live in 5–7 days. Fast, without compromising quality — so you can start getting enquiries quickly.',
  },
  {
    question: 'Will I get customers immediately?',
    answer: 'You’ll start getting visibility immediately. Most clients begin receiving enquiries within a few days, depending on their business and location.',
  },
  {
    question: 'Do I need hosting/domain?',
    answer: 'Yes, but don’t worry — we guide you step-by-step and help you set everything up correctly.',
    },
    {
    question: 'What if I need help after launch?',
    answer: 'We don’t just launch and disappear. We work with you every month to improve your online presence, manage growth, and ensure you keep getting enquiries.',
    },
    {
        question: 'Still have questions?',
        answer: 'Feel free to reach out to us directly on WhatsApp. We’re happy to answer any questions and guide you based on your business needs.',
    },
];

const FAQ = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="faq" className="py-28 md:py-32" style={{ background: 'hsl(var(--bg-primary))' }}>
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <div className="text-center mx-auto max-w-3xl">
          <span className="scroll-hidden section-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="scroll-hidden font-display font-bold text-[28px] sm:text-[36px] md:text-[52px] text-center mt-6 leading-[1.1] tracking-normal text-agency-text">
           Questions every business owner asks…
          </h2>
          <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary mt-6 leading-[1.85]">
            Still unsure? Here’s everything you need to know before getting started.
          </p>
        </div>

        <div className="grid gap-5 mt-12 sm:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="scroll-hidden rounded-[24px] border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.04)] p-6 sm:p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C9A84C]/15 text-[#C9A84C] font-bold text-lg">{index + 1}</span>
                <h3 className="font-body font-semibold text-base sm:text-lg text-agency-text">{faq.question}</h3>
              </div>
              <p className="font-body text-sm sm:text-base text-agency-text-secondary leading-[1.8] mt-2 text-justify">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

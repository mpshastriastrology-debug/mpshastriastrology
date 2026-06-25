export default function FaqSection({ title = "Common Questions Answered", faqs, idPrefix = "faq" }) {
  if (!faqs?.length) {
    return null;
  }

  return (
    <section className="bg-cream-soft px-[8%] py-24 md:px-[5%] md:py-[70px]">
      <div className="mb-12 text-center md:mb-[50px]">
        <p className="mb-3 font-body text-sm tracking-[0.15em] text-gold">✦ FREQUENTLY ASKED QUESTIONS</p>
        <h2 className="font-display text-4xl text-ink md:text-[2.25rem]">{title}</h2>
      </div>

      <div className="mx-auto flex max-w-[900px] flex-col gap-5">
        {faqs.map((faq, index) => (
          <div
            className="faq-item overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            key={faq.question}
          >
            <input type="checkbox" id={`${idPrefix}-${index + 1}`} />
            <label htmlFor={`${idPrefix}-${index + 1}`}>
              {faq.question}
              <span>+</span>
            </label>
            <div className="faq-content">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

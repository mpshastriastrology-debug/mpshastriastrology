import "./FaqSection.css";

export default function FaqSection({ title = "Common Questions Answered", faqs, idPrefix = "faq" }) {
  if (!faqs?.length) {
    return null;
  }

  return (
    <section className="faqSection">
      <div className="sectionHeading">
        <p>✦ FREQUENTLY ASKED QUESTIONS</p>
        <h2>{title}</h2>
      </div>

      <div className="faqContainer">
        {faqs.map((faq, index) => (
          <div className="faqItem" key={faq.question}>
            <input type="checkbox" id={`${idPrefix}-${index + 1}`} />
            <label htmlFor={`${idPrefix}-${index + 1}`}>
              {faq.question}
              <span>+</span>
            </label>
            <div className="faqContent">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

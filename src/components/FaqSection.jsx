import "./FaqSection.css";
import Reveal from "./Reveal";

export default function FaqSection({ title = "Common Questions Answered", faqs, idPrefix = "faq" }) {
  if (!faqs?.length) {
    return null;
  }

  return (
    <section className="faqSection">
      <Reveal className="sectionHeading" animation="fade-up">
        <p>✦ FREQUENTLY ASKED QUESTIONS</p>
        <h2>{title}</h2>
      </Reveal>

      <div className="faqContainer">
        {faqs.map((faq, index) => (
          <Reveal className="faqItem" key={faq.question} animation="fade-up" delay={index * 60}>
            <input type="checkbox" id={`${idPrefix}-${index + 1}`} />
            <label htmlFor={`${idPrefix}-${index + 1}`}>
              {faq.question}
              <span>+</span>
            </label>
            <div className="faqContent">{faq.answer}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

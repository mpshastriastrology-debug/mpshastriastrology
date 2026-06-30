import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import {
  HOME_INTRO_PARAGRAPHS,
  HOME_LOCAL_SECTION,
  HOME_PROCESS_SECTION,
  HOME_SERVICES_SECTION,
  HOME_WHY_SECTION,
} from "../seo/homeSeo";
import "./HomeContent.css";

function HomeContent() {
  return (
    <article className="homeContent">
      <Reveal as="section" className="homeContentBlock" animation="fade-up">
        <p className="homeContentEyebrow">✦ WELCOME TO MP SHASTRI ASTROLOGY</p>
        <h2>Trusted Vedic Astrology &amp; Vastu Guidance in Bengaluru</h2>
        {HOME_INTRO_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </Reveal>

      <Reveal as="section" className="homeContentBlock homeContentBlockAlt" animation="fade-up">
        <h2>{HOME_SERVICES_SECTION.title}</h2>
        <p>{HOME_SERVICES_SECTION.intro}</p>
        <div className="homeContentGrid">
          {HOME_SERVICES_SECTION.items.map(({ title, text }, index) => (
            <Reveal className="homeContentCard" key={title} animation="fade-up" delay={index * 60}>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
        <p className="homeContentLinks">
          Explore our full{" "}
          <Link to="/astrologyservices">astrology services</Link>,{" "}
          <Link to="/vastu">Vastu Shastra</Link>, and{" "}
          <Link to="/consultation">consultation menu</Link>.
        </p>
      </Reveal>

      <Reveal as="section" className="homeContentBlock" animation="fade-up">
        <h2>{HOME_LOCAL_SECTION.title}</h2>
        {HOME_LOCAL_SECTION.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <p className="homeContentLinks">
          Learn more about our{" "}
          <Link to="/astrologer-in-bangalore">astrologer in Bangalore</Link>{" "}
          and <Link to="/contact">office location</Link>.
        </p>
      </Reveal>

      <Reveal as="section" className="homeContentBlock homeContentBlockAlt" animation="fade-up">
        <h2>{HOME_WHY_SECTION.title}</h2>
        {HOME_WHY_SECTION.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <div className="homeContentGrid homeContentGridTwo">
          {HOME_WHY_SECTION.highlights.map(([title, text], index) => (
            <Reveal className="homeContentCard" key={title} animation="fade-up" delay={index * 60}>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="homeContentBlock" animation="fade-up">
        <h2>{HOME_PROCESS_SECTION.title}</h2>
        <ol className="homeContentSteps">
          {HOME_PROCESS_SECTION.steps.map(([title, text], index) => (
            <li key={title}>
              <span className="homeContentStepNum">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p>{HOME_PROCESS_SECTION.closing}</p>
        <div className="homeContentCta">
          <Link to="/contact" className="homeContentPrimaryBtn">
            Book Consultation
          </Link>
          <a href="tel:+918073258799" className="homeContentSecondaryBtn">
            Call +91 80732 58799
          </a>
        </div>
      </Reveal>
    </article>
  );
}

export default HomeContent;

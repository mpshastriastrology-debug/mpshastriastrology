import "./VastuExpert.css";

function VastuExpert() {
  return (
    <div className="vastuPage">

      {/* HERO */}

      <section className="vastuHero">

        <div className="vastuHeroContent">

          <span className="vastuBadge">
            ✦ PROFESSIONAL VASTU CONSULTATION
          </span>

          <h1>
            Best Vastu Expert in India
          </h1>

          <p>
            MP Shastri provides expert Vastu consultation for homes,
            apartments, offices, shops, factories and commercial
            properties. Create harmony, prosperity and positive energy
            with practical Vastu solutions.
          </p>

          <div className="vastuButtons">

            <a
              href="tel:+918073258799"
              className="vastuCallBtn"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918073258799"
              target="_blank"
              rel="noreferrer"
              className="vastuWhatsappBtn"
            >
              WhatsApp Consultation
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="vastuSection">

        <h2>
          Trusted Vastu Consultation Services
        </h2>

        <p>
          Vastu Shastra helps balance energies within a property.
          Our expert guidance supports better health, financial
          stability, peace, relationships and professional growth.
        </p>

      </section>

      {/* SERVICES */}

      <section className="vastuSection">

        <h2>
          Vastu Services We Offer
        </h2>

        <div className="vastuGrid">

          <div className="vastuCard">
            <h3>Home Vastu</h3>
            <p>
              Complete Vastu consultation for houses and apartments.
            </p>
          </div>

          <div className="vastuCard">
            <h3>Office Vastu</h3>
            <p>
              Improve productivity, growth and positive work energy.
            </p>
          </div>

          <div className="vastuCard">
            <h3>Commercial Vastu</h3>
            <p>
              Vastu solutions for shops and business establishments.
            </p>
          </div>

          <div className="vastuCard">
            <h3>Factory Vastu</h3>
            <p>
              Optimize industrial properties for smooth operations.
            </p>
          </div>

          <div className="vastuCard">
            <h3>Plot Analysis</h3>
            <p>
              Expert guidance before construction begins.
            </p>
          </div>

          <div className="vastuCard">
            <h3>Online Vastu Consultation</h3>
            <p>
              Get Vastu advice from anywhere in India.
            </p>
          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="vastuSection">

        <h2>
          Benefits of Vastu Guidance
        </h2>

        <div className="vastuGrid">

          <div className="vastuCard">
            <h3>Positive Energy</h3>
          </div>

          <div className="vastuCard">
            <h3>Financial Growth</h3>
          </div>

          <div className="vastuCard">
            <h3>Peace & Harmony</h3>
          </div>

          <div className="vastuCard">
            <h3>Career Success</h3>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="vastuCTA">

        <h2>
          Book Your Vastu Consultation Today
        </h2>

        <p>
          Get expert Vastu advice for your home, office,
          shop or commercial property.
        </p>

        <a href="tel:+918073258799">
          Call +91 80732 58799
        </a>

      </section>

    </div>
  );
}

export default VastuExpert;
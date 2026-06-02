import "./Tantra.css";

function Tantra() {

  return (

    <section className="tantraPage">

      {/* HERO */}

      <div className="tantraHero">

        <div className="tantraOverlay"></div>

        <div className="tantraHeroContent">

          <p>
            ✦ Ancient Spiritual Energy
          </p>

          <h1>
            Powerful Tantra Spiritual Guidance
          </h1>

          <span>
            Experience ancient tantra practices
            for positivity, protection, spiritual
            healing, energy balance and inner peace
            through trusted guidance.
          </span>

          <a
            href="https://wa.me/918073258799"
            target="_blank"
            rel="noreferrer"
            className="tantraBtn"
          >
            Book Tantra Consultation
          </a>

        </div>

      </div>

      {/* ABOUT */}

      <div className="tantraAbout">

        <div className="tantraImage">

          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop"
            alt="Tantra Spiritual Guidance"
          />

        </div>

        <div className="tantraContent">

          <p className="smallTitle">
            ✦ ABOUT TANTRA
          </p>

          <h2>
            Spiritual Energy & Positive Transformation
          </h2>

          <p>

            Tantra is an ancient spiritual practice
            focused on energy balance, spiritual
            awakening, protection and inner healing.
            Through sacred rituals and spiritual
            guidance, tantra helps remove negativity,
            improve positivity and strengthen mental
            and emotional stability.

          </p>

          <div className="tantraPoints">

            <div className="tantraPoint">

              ✔ Spiritual Energy Healing

            </div>

            <div className="tantraPoint">

              ✔ Negative Energy Protection

            </div>

            <div className="tantraPoint">

              ✔ Meditation & Peace Guidance

            </div>

            <div className="tantraPoint">

              ✔ Spiritual Ritual Consultation

            </div>

          </div>

        </div>

      </div>

      {/* SERVICES */}

      <div className="tantraServices">

        <div className="sectionHeading">

          <p>
            ✦ TANTRA SERVICES
          </p>

          <h2>
            Spiritual Healing Solutions
          </h2>

        </div>

        <div className="tantraServiceGrid">

          {/* CARD 1 */}

          <div className="tantraCard">

            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
              alt="Meditation"
            />

            <div className="tantraCardContent">

              <h3>
                Spiritual Meditation
              </h3>

              <p>
                Guided meditation sessions
                for peace, focus, positivity
                and emotional balance.
              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="tantraCard">

            <img
              src="/healing.webp"
              alt="Healing"
            />

            <div className="tantraCardContent">

              <h3>
                Energy Healing
              </h3>

              <p>
                Spiritual healing practices
                to remove negativity and
                improve positive vibrations.
              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="tantraCard">

            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
              alt="Spiritual Rituals"
            />

            <div className="tantraCardContent">

              <h3>
                Sacred Rituals
              </h3>

              <p>
                Traditional spiritual rituals
                for protection, peace and
                spiritual growth guidance.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* EXTRA SECTION */}

      <div className="tantraExtraSection">

        <div className="tantraExtraLeft">

          <p className="smallTitle">
            ✦ ANCIENT SPIRITUAL SCIENCE
          </p>

          <h2>
            Discover Inner Peace & Positive Energy
          </h2>

          <p>

            Tantra focuses on spiritual balance,
            meditation, positivity and personal
            transformation through ancient wisdom.
            It helps improve concentration,
            emotional strength and spiritual awareness.

          </p>

          <p>

            Professional tantra guidance can help
            individuals facing stress, negativity,
            emotional imbalance and spiritual confusion
            by creating a peaceful and harmonious mindset.

          </p>

        </div>

        <div className="tantraExtraRight">

          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
            alt="Spiritual Energy"
          />

        </div>

      </div>

      {/* BENEFITS */}

      <div className="tantraBenefits">

        <div className="sectionHeading">

          <p>
            ✦ BENEFITS
          </p>

          <h2>
            Benefits Of Tantra Guidance
          </h2>

        </div>

        <div className="benefitGrid">

          <div className="benefitCard">

            <h3>
              Mental Peace
            </h3>

            <p>
              Improve emotional balance,
              reduce stress and create
              inner calmness.
            </p>

          </div>

          <div className="benefitCard">

            <h3>
              Positive Energy
            </h3>

            <p>
              Remove negativity and
              attract positivity and
              spiritual harmony.
            </p>

          </div>

          <div className="benefitCard">

            <h3>
              Spiritual Growth
            </h3>

            <p>
              Enhance spiritual awareness
              and personal transformation.
            </p>

          </div>

          <div className="benefitCard">

            <h3>
              Protection Guidance
            </h3>

            <p>
              Traditional rituals for
              spiritual protection and
              positive vibrations.
            </p>

          </div>

        </div>

      </div>

      
    </section>
  );
}

export default Tantra;
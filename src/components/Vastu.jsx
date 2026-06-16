import "./Vastu.css";
import { Link } from 'react-router-dom'

function Vastu() {

  return (

    <section className="vastuPage">

      {/* HERO */}

      <div className="vastuHero">

        <div className="vastuOverlay"></div>

        <div className="vastuHeroContent">

          <p>
            ✦ Ancient Energy Science
          </p>

          <h1>
            Professional Vastu Consultation
          </h1>

          <span>
            Create positive energy, harmony,
            prosperity and spiritual balance
            in your home, office and business
            spaces with expert vastu guidance.
          </span>

          <a
            href="https://wa.me/918073258799"
            target="_blank"
            rel="noreferrer"
            className="vastuBtn"
          >
            Book Vastu Consultation
          </a>

        </div>

      </div>

      {/* ABOUT */}

      <div className="vastuAbout">

        <div className="vastuImage">

          <img
            src="/vasthu.webp"
            alt="Vastu Consultation"
          />

        </div>

        <div className="vastuContent">

          <p className="smallTitle">
            ✦ ABOUT VASTU
          </p>

          <h2>
            Bring Positive Energy Into Your Space
          </h2>

          <p>

            Vastu Shastra is an ancient Indian
            science of architecture and energy
            balance. Proper vastu alignment
            helps improve health, peace,
            success, prosperity and relationships
            by harmonizing natural energies.

          </p>

          <div className="vastuPoints">

            <div className="vastuPoint">

              ✔ Home Vastu Consultation

            </div>

            <div className="vastuPoint">

              ✔ Office & Business Vastu

            </div>

            <div className="vastuPoint">

              ✔ Factory & Commercial Vastu

            </div>

            <div className="vastuPoint">

              ✔ Simple Vastu Remedies

            </div>

          </div>

        </div>

      </div>

      {/* SERVICES */}

      <div className="vastuServices">
<div className="service-links">
    <Link to="/astrologer-in-bangalore">
    Astrology Services in Bangalore
  </Link>
  <Link to="/online-astrologer">
    Online Astrology Consultation
  </Link>

  <Link to="/vastu-expert">
    Vastu Expert Services
  </Link>

  <Link to="/astrologer-in-india">
    Best Astrologer in India
  </Link>
</div>
<br/><br/>
        <div className="sectionHeading">

          <p>✦ OUR VASTU SERVICES</p>

          <h2>Complete Vastu Solutions</h2>

        </div>

        <div className="vastuServiceGrid">

          {/* CARD 1 */}

          <div className="vastuCard">

            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
              alt="Home Vastu"
            />

            <div className="vastuCardContent">

              <h3>Home Vastu</h3>

              <p>
                Improve positivity, happiness
                and peace in your house with
                vastu corrections and remedies.
              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="vastuCard">

            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
              alt="Office Vastu"
            />

            <div className="vastuCardContent">

              <h3>Office Vastu</h3>

              <p>
                Enhance growth, financial success
                and business stability with office
                vastu consultation.
              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="vastuCard">

            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
              alt="Commercial Vastu"
            />

            <div className="vastuCardContent">

              <h3>Commercial Vastu</h3>

              <p>
                Professional vastu guidance for
                shops, factories and commercial
                spaces for better prosperity.
              </p>

            </div>

          </div>

        </div>
        <section className="vastuImportance">

  <div className="vastuImportanceContainer">

    <div className="vastuImportanceHeader">
      <p>✦ IMPORTANCE OF VASTU SHASTRA</p>

      <h2>
        Why Is Vastu Important for Homes, Offices and Businesses?
      </h2>

      <p>
        Vastu Shastra is an ancient architectural science that focuses on
        balancing natural energies within a property. A Vastu-compliant
        environment can support peace, prosperity, growth and overall
        well-being for individuals, families and businesses.
      </p>
    </div>

    <div className="vastuBenefitsGrid">

      <div className="vastuBox">
        <h3>Financial Growth</h3>
        <p>
          Proper Vastu alignment may help create a positive environment
          that supports financial stability, business growth and wealth
          opportunities.
        </p>
      </div>

      <div className="vastuBox">
        <h3>Career Success</h3>
        <p>
          A balanced workplace can improve focus, productivity,
          confidence and professional development.
        </p>
      </div>

      <div className="vastuBox">
        <h3>Family Harmony</h3>
        <p>
          Vastu principles aim to create a peaceful atmosphere that
          encourages healthy family relationships and emotional balance.
        </p>
      </div>

      <div className="vastuBox">
        <h3>Health & Well-Being</h3>
        <p>
          Proper placement of rooms and energy flow can contribute to a
          comfortable and positive living environment.
        </p>
      </div>

    </div>

    <div className="vastuDoshaSection">

      <h2>
        What Happens When Vastu Is Not Properly Balanced?
      </h2>

      <p>
        According to Vastu beliefs, imbalances in a property's layout,
        directions or energy flow may contribute to various challenges
        in personal and professional life.
      </p>

      <div className="vastuProblems">

        <div className="problemCard">
          <span>💰</span>
          <h4>Financial Challenges</h4>
          <p>Unexpected expenses, financial instability or business difficulties.</p>
        </div>

        <div className="problemCard">
          <span>💼</span>
          <h4>Career Obstacles</h4>
          <p>Delays in growth, lack of opportunities or workplace stress.</p>
        </div>

        <div className="problemCard">
          <span>❤️</span>
          <h4>Relationship Issues</h4>
          <p>Frequent misunderstandings and lack of harmony among family members.</p>
        </div>

        <div className="problemCard">
          <span>🏠</span>
          <h4>Property Issues</h4>
          <p>Construction delays, tenant problems or difficulties related to property matters.</p>
        </div>

        <div className="problemCard">
          <span>📚</span>
          <h4>Study & Focus Problems</h4>
          <p>Difficulty concentrating, reduced productivity or learning challenges.</p>
        </div>

        <div className="problemCard">
          <span>⚖️</span>
          <h4>Business & Legal Concerns</h4>
          <p>Partnership disputes, operational challenges or prolonged delays.</p>
        </div>

      </div>

    </div>

  </div>

</section>
<section className="vastuServicesSection">

  <div className="sectionHeading">
    <p>✦ VASTU CONSULTATION SERVICES</p>

    <h2>
      All Types of Vastu Consultation Services in Bangalore
    </h2>

    <p className="vastuDescription">
      We provide expert Vastu consultation for homes, offices, apartments,
      commercial properties, plots, factories, shops and businesses. Our
      Vastu guidance helps improve financial growth, career success,
      relationships, health and overall prosperity.
    </p>
  </div>

  <div className="vastuServiceTags">

    <span>Home Vastu Consultation</span>
    <span>Apartment Vastu</span>
    <span>Villa Vastu</span>
    <span>New House Vastu</span>
    <span>Plot Vastu Analysis</span>

    <span>Office Vastu Consultation</span>
    <span>Commercial Vastu</span>
    <span>Shop Vastu</span>
    <span>Factory Vastu</span>
    <span>Warehouse Vastu</span>

    <span>Business Vastu</span>
    <span>Vastu Remedies</span>
    <span>Vastu Defect Analysis</span>
    <span>Vastu for Financial Growth</span>

    <span>Vastu for Career Success</span>
    <span>Vastu for Marriage Harmony</span>
    <span>Vastu for Health</span>
    <span>Vastu for Family Peace</span>

    <span>Industrial Vastu</span>
    <span>Residential Vastu</span>

  </div>

</section>

      </div>

    </section>
  );
}

export default Vastu;
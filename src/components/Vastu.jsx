import "./Vastu.css";

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
            src="v4.png"
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

      </div>

    </section>
  );
}

export default Vastu;
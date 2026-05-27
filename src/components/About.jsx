import './About.css'

function About() {
  return (
    <section className="aboutSection">

      <div className="aboutContainer">

        {/* LEFT CONTENT */}
        <div className="aboutContent">

          <span className="aboutTag">
            About Us
          </span>

          <h1>
            Trusted Astrology &
            Spiritual Guidance
          </h1>

          <p>
            Welcome to Mpshastri Astrology, your trusted
            destination for accurate astrology consultation,
            vastu guidance, numerology and spiritual solutions.
          </p>

          <p>
            We help people solve life problems related to
            marriage, love, career, finance and family through
            ancient Vedic astrology and positive spiritual energy.
          </p>

          <div className="aboutPoints">

            <div className="point">
              ✔ 10+ Years Experience
            </div>

            <div className="point">
              ✔ Accurate Predictions
            </div>

            <div className="point">
              ✔ Online Consultation
            </div>

            <div className="point">
              ✔ Trusted By Thousands
            </div>

          </div>

          <button className="aboutBtn">
            Book Consultation
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="aboutImage">

          <img
            src="https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1200&auto=format&fit=crop"
            alt="Astrology"
          />

        </div>

      </div>

    </section>
  )
}

export default About
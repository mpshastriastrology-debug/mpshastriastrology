
import "./Astrology.css";
import "./Services1.css";
import { Link } from 'react-router-dom'

function Astrology() {

  return (
    <section>{/* SERVICES */}
<div className="astroServices">
  <div className="sectionHeading">
    <p>✦ OUR SPECIALITIES</p>
    <h2>Astrology Services in Bangalore</h2>
  </div>

  <div className="astroServiceGrid">

    <div className="astroCard">
      <img src="/topastronuts.avif" alt="Horoscope Reading Astrology Service Bangalore" />
      <div className="astroCardContent">
        <h3>Horoscope Reading</h3>
        <p>Accurate horoscope analysis with personalized future predictions and remedies.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/careerproblem.webp" alt="Career Astrology Consultation Bangalore" />
      <div className="astroCardContent">
        <h3>Career Astrology</h3>
        <p>Career guidance for jobs, promotions, business growth and success.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/marriage-astrology.webp" alt="Marriage Matching Astrology Bangalore" />
      <div className="astroCardContent">
        <h3>Marriage Matching</h3>
        <p>Kundali matching and compatibility analysis for successful marriages.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/financialproblem.webp" alt="Financial Problem Astrology Bangalore" />
      <div className="astroCardContent">
        <h3>Financial Problem Solution</h3>
        <p>Astrological guidance for debt relief, wealth growth and financial stability.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/loveproblem.webp" alt="Love Problem Astrology Consultation Bangalore" />
      <div className="astroCardContent">
        <h3>Love Problem Solution</h3>
        <p>Guidance for love life, relationships and emotional challenges.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/relationship.webp" alt="Relationship Problem Astrology Bangalore" />
      <div className="astroCardContent">
        <h3>Relationship Problems</h3>
        <p>Resolve misunderstandings and strengthen personal relationships.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/familyconflict.webp" alt="Family Conflict Astrology Bangalore" />
      <div className="astroCardContent">
        <h3>Family Conflict Resolution</h3>
        <p>Astrological guidance for family harmony and peaceful relationships.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/businessproblem.webp" alt="Business Astrology Consultation Bangalore" />
      <div className="astroCardContent">
        <h3>Business Astrology</h3>
        <p>Business growth, investment and partnership guidance through astrology.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/vastuproblem.webp" alt="Vastu Consultation Bangalore" />
      <div className="astroCardContent">
        <h3>Vastu Consultation</h3>
        <p>Residential and commercial Vastu solutions for prosperity and success.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/numerology.webp" alt="Numerology Consultation Bangalore" />
      <div className="astroCardContent">
        <h3>Numerology Consultation</h3>
        <p>Name, mobile number and date-of-birth numerology analysis.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/foreign.webp" alt="Foreign Settlement Astrology Bangalore" />
      <div className="astroCardContent">
        <h3>Foreign Settlement</h3>
        <p>Guidance for overseas education, jobs, travel and immigration.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/healthproblem.webp" alt="Health Astrology Guidance Bangalore" />
      <div className="astroCardContent">
        <h3>Health Astrology</h3>
        <p>Health-related astrological analysis and preventive guidance.</p>
      </div>
    </div>
    </div></div>
    </section>
  );
}

export default Astrology;
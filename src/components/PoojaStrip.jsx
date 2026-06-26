import { FaOm } from "react-icons/fa";
import { GiLotus, GiCandleFlame } from "react-icons/gi";
import "./PoojaStrip.css";

export default function PoojaStrip() {
  return (
    <div className="poojaStrip" aria-hidden="true">
      <span className="poojaStripOm">ॐ</span>
      <img
        src="/MPShastriLogo.webp"
        alt=""
        className="poojaStripMandala"
        loading="lazy"
      />
      <span className="poojaStripMantra">|| श्री गुरुभ्यो नमः ||</span>
      <div className="poojaStripIcons">
        <span className="poojaStripIcon" title="Om">
          <FaOm />
        </span>
        <span className="poojaStripIcon" title="Lotus">
          <GiLotus />
        </span>
        <span className="poojaStripIcon" title="Diya">
          <GiCandleFlame />
        </span>
      </div>
      <span className="poojaStripBlessing">
        Vedic Astrology · Vastu Shastra · Spiritual Guidance
      </span>
      <span className="poojaStripOm">ॐ</span>
    </div>
  );
}

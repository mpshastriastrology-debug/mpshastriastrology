import "./VedicBackdrop.css";

const ZODIAC_RING = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

export default function VedicBackdrop() {
  return (
    <div className="vedicBackdrop" aria-hidden="true">
      <div className="vedicBackdropCosmos" />
      <div className="vedicBackdropStars" />
      <div className="vedicBackdropMandala" />
      <span className="vedicBackdropOm">ॐ</span>

      <div className="vedicBackdropZodiacRing">
        {ZODIAC_RING.map((sign) => (
          <span key={sign} className="vedicBackdropZodiacItem">
            {sign}
          </span>
        ))}
      </div>

      <div className="vedicBackdropDeityLeft" />
      <div className="vedicBackdropDeityRight" />
    </div>
  );
}

import "./VedicBackdrop.css";

export default function VedicBackdrop() {
  return (
    <div className="vedicBackdrop" aria-hidden="true">
      <div className="vedicBackdropCosmos" />
      <div className="vedicBackdropStars" />
      <div className="vedicBackdropMandala" />
      <span className="vedicBackdropOm">ॐ</span>
      <div className="vedicBackdropDeityLeft" />
      <div className="vedicBackdropDeityRight" />
    </div>
  );
}

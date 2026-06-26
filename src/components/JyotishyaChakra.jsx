import { useId } from "react";

const RASHIS = [
  { name: "Mesha", symbol: "♈" },
  { name: "Vrishabha", symbol: "♉" },
  { name: "Mithuna", symbol: "♊" },
  { name: "Karka", symbol: "♋" },
  { name: "Simha", symbol: "♌" },
  { name: "Kanya", symbol: "♍" },
  { name: "Tula", symbol: "♎" },
  { name: "Vrishchika", symbol: "♏" },
  { name: "Dhanu", symbol: "♐" },
  { name: "Makara", symbol: "♑" },
  { name: "Kumbha", symbol: "♒" },
  { name: "Meena", symbol: "♓" },
];

const PLANETS = [
  { symbol: "☉", label: "Surya" },
  { symbol: "☽", label: "Chandra" },
  { symbol: "☿", label: "Budha" },
  { symbol: "♀", label: "Shukra" },
  { symbol: "♂", label: "Mangal" },
  { symbol: "♃", label: "Guru" },
  { symbol: "♄", label: "Shani" },
  { symbol: "☊", label: "Rahu" },
  { symbol: "☋", label: "Ketu" },
];

export default function JyotishyaChakra({ className = "" }) {
  const uid = useId().replace(/:/g, "");
  const cx = 280;
  const cy = 280;

  return (
    <svg
      className={className}
      viewBox="0 0 560 560"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id={`chakraGlow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd369" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#d4af37" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#5c0a0a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`goldRing-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="50%" stopColor="#ffd369" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
        <filter id={`textGlow-${uid}`}>
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#1a0303" floodOpacity="0.9" />
        </filter>
      </defs>

      <circle cx={cx} cy={cy} r="255" fill={`url(#chakraGlow-${uid})`} />

      {/* Outer rings */}
      <circle cx={cx} cy={cy} r="238" fill="none" stroke={`url(#goldRing-${uid})`} strokeWidth="3" />
      <circle cx={cx} cy={cy} r="228" fill="none" stroke="#ffd369" strokeWidth="1" opacity="0.5" />

      {/* 12 rashi segments with symbols + names */}
      {RASHIS.map((rashi, index) => {
        const segAngle = index * 30 - 90;
        const rad = (segAngle * Math.PI) / 180;
        const midRad = ((index * 30 + 15 - 90) * Math.PI) / 180;

        const x1 = cx + Math.cos(rad) * 128;
        const y1 = cy + Math.sin(rad) * 128;
        const x2 = cx + Math.cos(rad) * 228;
        const y2 = cy + Math.sin(rad) * 228;

        const symX = cx + Math.cos(midRad) * 188;
        const symY = cy + Math.sin(midRad) * 188;
        const nameX = cx + Math.cos(midRad) * 212;
        const nameY = cy + Math.sin(midRad) * 212;
        const rot = index * 30 + 15;

        return (
          <g key={rashi.name}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffd369" strokeWidth="1.2" opacity="0.65" />
            <text
              x={symX}
              y={symY}
              fill="#ffd369"
              fontSize="22"
              textAnchor="middle"
              dominantBaseline="middle"
              filter={`url(#textGlow-${uid})`}
              transform={`rotate(${rot}, ${symX}, ${symY})`}
            >
              {rashi.symbol}
            </text>
            <text
              x={nameX}
              y={nameY}
              fill="#fff8dc"
              fontSize="10.5"
              fontFamily="Poppins, sans-serif"
              fontWeight="600"
              textAnchor="middle"
              dominantBaseline="middle"
              letterSpacing="0.5"
              filter={`url(#textGlow-${uid})`}
              transform={`rotate(${rot}, ${nameX}, ${nameY})`}
            >
              {rashi.name}
            </text>
          </g>
        );
      })}

      {/* House ring */}
      <circle cx={cx} cy={cy} r="118" fill="none" stroke="#d4af37" strokeWidth="1.5" opacity="0.75" />

      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * 30 - 90) * (Math.PI / 180);
        return (
          <circle
            key={`house-${index}`}
            cx={cx + Math.cos(angle) * 118}
            cy={cy + Math.sin(angle) * 118}
            r="3.5"
            fill="#ffd369"
          />
        );
      })}

      {/* Navagraha symbols */}
      {PLANETS.map((planet, index) => {
        const angle = (index * 40 - 90) * (Math.PI / 180);
        const px = cx + Math.cos(angle) * 82;
        const py = cy + Math.sin(angle) * 82;
        return (
          <g key={planet.label}>
            <circle cx={px} cy={py} r="14" fill="rgba(92, 10, 10, 0.55)" stroke="#ff9933" strokeWidth="1" />
            <text
              x={px}
              y={py + 1}
              fill="#ffd369"
              fontSize="14"
              textAnchor="middle"
              dominantBaseline="middle"
              filter={`url(#textGlow-${uid})`}
            >
              {planet.symbol}
            </text>
          </g>
        );
      })}

      {/* Inner chakra spokes */}
      {Array.from({ length: 8 }).map((_, index) => {
        const angle = (index * 45 - 90) * (Math.PI / 180);
        return (
          <line
            key={`spoke-${index}`}
            x1={cx}
            y1={cy}
            x2={cx + Math.cos(angle) * 58}
            y2={cy + Math.sin(angle) * 58}
            stroke="#ff9933"
            strokeWidth="1.5"
            opacity="0.65"
          />
        );
      })}

      <circle cx={cx} cy={cy} r="58" fill="rgba(61, 5, 5, 0.6)" stroke={`url(#goldRing-${uid})`} strokeWidth="2.5" />

      <text
        x={cx}
        y={cy + 2}
        fill="#ffd369"
        fontSize="36"
        fontFamily="Cormorant Garamond, serif"
        textAnchor="middle"
        dominantBaseline="middle"
        filter={`url(#textGlow-${uid})`}
      >
        ॐ
      </text>

      {/* Lagna cross + direction labels */}
      <line x1={cx} y1="38" x2={cx} y2="72" stroke="#ffd369" strokeWidth="2.5" />
      <line x1={cx} y1="488" x2={cx} y2="522" stroke="#ffd369" strokeWidth="2.5" />
      <line x1="38" y1={cy} x2="72" y2={cy} stroke="#ffd369" strokeWidth="2.5" />
      <line x1="488" y1={cy} x2="522" y2={cy} stroke="#ffd369" strokeWidth="2.5" />

      <text x={cx} y="28" fill="#ffd369" fontSize="11" fontWeight="600" textAnchor="middle" filter={`url(#textGlow-${uid})`}>Lagna</text>
      <text x={cx} y="542" fill="#ffd369" fontSize="11" fontWeight="600" textAnchor="middle" filter={`url(#textGlow-${uid})`}>7th</text>
      <text x="28" y={cy + 4} fill="#ffd369" fontSize="11" fontWeight="600" textAnchor="middle" filter={`url(#textGlow-${uid})`}>4th</text>
      <text x="532" y={cy + 4} fill="#ffd369" fontSize="11" fontWeight="600" textAnchor="middle" filter={`url(#textGlow-${uid})`}>10th</text>
    </svg>
  );
}

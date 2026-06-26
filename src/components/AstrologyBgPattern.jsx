import "./AstrologyBgPattern.css";

const ZODIAC = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
const PLANETS = ["☉", "☽", "☿", "♀", "♂", "♃", "♄", "☊", "☋"];

const SCATTERED = [
  { symbol: "ॐ", top: "6%", left: "3%", size: 52, rotate: -12 },
  { symbol: "♈", top: "14%", left: "12%", size: 38 },
  { symbol: "☉", top: "8%", left: "88%", size: 42 },
  { symbol: "♉", top: "22%", left: "92%", size: 34, rotate: 15 },
  { symbol: "♊", top: "28%", left: "6%", size: 36 },
  { symbol: "☽", top: "35%", left: "95%", size: 40 },
  { symbol: "♋", top: "42%", left: "2%", size: 32, rotate: 8 },
  { symbol: "♌", top: "48%", left: "90%", size: 38 },
  { symbol: "♂", top: "52%", left: "8%", size: 36 },
  { symbol: "♍", top: "58%", left: "94%", size: 34 },
  { symbol: "♎", top: "65%", left: "4%", size: 36, rotate: -10 },
  { symbol: "♃", top: "68%", left: "86%", size: 40 },
  { symbol: "♏", top: "72%", left: "14%", size: 32 },
  { symbol: "♐", top: "78%", left: "78%", size: 36, rotate: 12 },
  { symbol: "♄", top: "82%", left: "6%", size: 38 },
  { symbol: "♑", top: "88%", left: "88%", size: 34 },
  { symbol: "☿", top: "18%", left: "48%", size: 28 },
  { symbol: "♀", top: "55%", left: "50%", size: 30 },
  { symbol: "♒", top: "38%", left: "72%", size: 32, rotate: -8 },
  { symbol: "♓", top: "62%", left: "28%", size: 32, rotate: 6 },
  { symbol: "☊", top: "92%", left: "42%", size: 34 },
  { symbol: "☋", top: "4%", left: "62%", size: 34 },
  { symbol: "ॐ", top: "94%", left: "72%", size: 44, rotate: 10 },
  { symbol: "✦", top: "46%", left: "96%", size: 22 },
  { symbol: "✦", top: "30%", left: "1%", size: 20 },
];

export default function AstrologyBgPattern() {
  return (
    <div className="astroBgPattern" aria-hidden="true">
      <div className="astroBgPatternRing" />
      <div className="astroBgPatternDots" />

      {SCATTERED.map((item, index) => (
        <span
          key={`${item.symbol}-${index}`}
          className="astroBgSymbol"
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.size,
            transform: item.rotate ? `rotate(${item.rotate}deg)` : undefined,
          }}
        >
          {item.symbol}
        </span>
      ))}

      <div className="astroBgSymbolRow astroBgSymbolRowTop">
        {ZODIAC.map((z) => (
          <span key={`top-${z}`}>{z}</span>
        ))}
      </div>

      <div className="astroBgSymbolRow astroBgSymbolRowBottom">
        {PLANETS.map((p) => (
          <span key={`bot-${p}`}>{p}</span>
        ))}
      </div>
    </div>
  );
}

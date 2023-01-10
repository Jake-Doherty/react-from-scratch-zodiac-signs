import '../Zodiac/Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="zodiac-container">
      <img className="zodiac-sign-image" src={`/images/zodiac-symbols/${props.name}.png`} />
      <h2 className="zodiac-name">{props.name}</h2>
      <p className="zodiac-dates">{props.dates}</p>
      <p className="zodiac-symbol">{props.symbol}</p>
    </div>
  );
}

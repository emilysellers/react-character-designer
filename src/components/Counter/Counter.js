import './Counter.css';

export default function Counter({ phrase }) {
  return (
    <div className="counterSection">
      Catchphrases:
      <p>{phrase}</p>
    </div>
  );
}

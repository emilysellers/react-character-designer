import React from 'react';

import './Counter.css';

export default function Counter({ phrases, headCount, topCount, bottomCount }) {
  return (
    <div className="counterSection">
      <h2>Catchphrases:</h2>
      <ul className="phraseList">
        {phrases.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p>
        You have changed your buddy head {headCount} times, top {topCount} times and bottom{' '}
        {bottomCount} times.
      </p>
    </div>
  );
}

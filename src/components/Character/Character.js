import React from 'react';

import './Character.css';

export default function Character({ head, top, bottom }) {
  return (
    <div className="characterDisplay">
      <div>
        <img src={`/${head}.png`} />
      </div>
      <div>
        <img src={`/${top}.png`} />
      </div>
      <div>
        <img src={`/${bottom}.png`} />
      </div>
    </div>
  );
}

import React from 'react';

import './Character.css';

export default function Character({ head, top }) {
  return (
    <div className="characterDisplay">
      <div>
        <img src={`/${head}.png`} />
      </div>
      <div>
        <img src={`/${top}.png`} />
      </div>
      <div>bottom image</div>
    </div>
  );
}

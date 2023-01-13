import React from 'react';

import './Character.css';

export default function Character({ head }) {
  return (
    <div className="characterDisplay">
      <div>
        <img src={`/${head}.png`} />
      </div>
      <div>top image</div>
      <div>bottom image</div>
    </div>
  );
}

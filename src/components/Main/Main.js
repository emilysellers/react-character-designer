import React from 'react';

import './Main.css';

import Selector from '../Selector/Selector';
import Counter from '../Counter/Counter';
import Character from '../Character/Character';

export default function Main() {
  return (
    <main>
      <div className="builder">
        <Selector />
        <Character />
      </div>
      <div>
        <Counter />
      </div>
    </main>
  );
}

import React, { useState } from 'react';

import Selector from '../Selector/Selector';
import Counter from '../Counter/Counter';
import Character from '../Character/Character';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  return (
    <main>
      <div className="builder">
        <Selector {...{ head, setHead }} />
        <Character {...{ head }} />
      </div>
      <div>
        <Counter />
      </div>
    </main>
  );
}

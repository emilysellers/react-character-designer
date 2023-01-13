import React, { useState } from 'react';

import Selector from '../Selector/Selector';
import Counter from '../Counter/Counter';
import Character from '../Character/Character';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  return (
    <main>
      <div className="builder">
        <Selector {...{ head, setHead, top, setTop, bottom, setBottom }} />
        <Character {...{ head, top, bottom }} />
      </div>
      <div>
        <Counter />
      </div>
    </main>
  );
}

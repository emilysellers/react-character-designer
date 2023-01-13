import React, { useState } from 'react';

import Selector from '../Selector/Selector';
import Counter from '../Counter/Counter';
import Character from '../Character/Character';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('giraffe');
  const [top, setTop] = useState('cozy');
  const [bottom, setBottom] = useState('fancy');
  const [phrases, setPhrases] = useState([]);
  return (
    <main>
      <div className="builder">
        <Selector {...{ head, setHead, top, setTop, bottom, setBottom, phrases, setPhrases }} />
        <Character {...{ head, top, bottom }} />
      </div>
      <div>
        <Counter {...{ phrases }} />
      </div>
    </main>
  );
}

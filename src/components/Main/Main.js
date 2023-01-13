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
  const [headCount, setHeadCount] = useState(0);
  const [topCount, setTopCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  return (
    <main>
      <div className="builder">
        <Selector
          {...{
            head,
            setHead,
            top,
            setTop,
            bottom,
            setBottom,
            phrases,
            setPhrases,
            headCount,
            setHeadCount,
            topCount,
            setTopCount,
            bottomCount,
            setBottomCount,
          }}
        />
        <Character {...{ head, top, bottom }} />
      </div>
      <div>
        <Counter {...{ phrases, headCount, topCount, bottomCount }} />
      </div>
    </main>
  );
}

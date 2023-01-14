import React, { useState } from 'react';

import './Selector.css';

export default function Selector({
  head,
  setHead,
  top,
  setTop,
  bottom,
  setBottom,
  setPhrases,
  headCount,
  setHeadCount,
  topCount,
  setTopCount,
  bottomCount,
  setBottomCount,
}) {
  const [inputValue, setInputValue] = useState('');
  const handleClick = () => {
    if (inputValue === '') {
      alert('Please enter a catchphrase');
    } else {
      setPhrases((currentState) => [...currentState, inputValue]);
      setInputValue('');
    }
  };
  const headHandler = (event) => {
    setHead(event.target.value);
    setHeadCount(headCount + 1);
  };
  const topHandler = (event) => {
    setTop(event.target.value);
    setTopCount(topCount + 1);
  };
  const bottomHandler = (event) => {
    setBottom(event.target.value);
    setBottomCount(bottomCount + 1);
  };
  return (
    <div className="form">
      <div>
        <h2 className="selector">
          <label>Head</label>
          <select className="selector" value={head} onChange={headHandler}>
            <option value="shark">shark</option>
            <option value="giraffe">giraffe</option>
            <option value="ostrich">ostrich</option>
          </select>
        </h2>
      </div>
      <div>
        <h2 className="selector">
          <label>Top</label>
          <select className="selector" value={top} onChange={topHandler}>
            <option value="cozy">cozy</option>
            <option value="profesh">profesh</option>
            <option value="safety">safety</option>
          </select>
        </h2>
      </div>
      <div>
        <h2 className="selector">
          <label>Bottom</label>
          <select className="selector" value={bottom} onChange={bottomHandler}>
            <option value="fancy">fancy</option>
            <option value="dancy">dancy</option>
            <option value="comfy">comfy</option>
          </select>
        </h2>
      </div>
      <h2 className="selector">
        <label>Catchphrase:</label>
        <textarea
          className="selector"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="add a catchphrase!"
        ></textarea>
        <div>
          <button onClick={handleClick}>Add</button>
        </div>
      </h2>
    </div>
  );
}

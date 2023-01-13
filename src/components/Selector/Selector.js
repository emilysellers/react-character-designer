import './Selector.css';

export default function Selector({
  head,
  setHead,
  top,
  setTop,
  bottom,
  setBottom,
  phrase,
  setPhrase,
}) {
  const headHandler = (event) => {
    setHead(event.target.value);
  };
  const topHandler = (event) => {
    setTop(event.target.value);
  };
  const bottomHandler = (event) => {
    setBottom(event.target.value);
  };
  const phraseHandler = (event) => {
    setPhrase(event.target.value);
  };
  return (
    <>
      <div className="form">
        <div>
          <div className="selector">
            <label>Head</label>
            <select value={head} onChange={headHandler}>
              <option value="shark">shark</option>
              <option value="giraffe">giraffe</option>
              <option value="ostrich">ostrich</option>
            </select>
          </div>
        </div>
        <div>
          <div className="selector">
            <label>Top</label>
            <select value={top} onChange={topHandler}>
              <option value="cozy">cozy</option>
              <option value="profesh">profesh</option>
              <option value="safety">safety</option>
            </select>
          </div>
        </div>
        <div>
          <div className="selector">
            <label>Bottom</label>
            <select value={bottom} onChange={bottomHandler}>
              <option value="fancy">fancy</option>
              <option value="dancy">dancy</option>
              <option value="comfy">comfy</option>
            </select>
          </div>
        </div>
        <div>
          <label>Catchphrase:</label>
          <textarea
            value={phrase}
            onChange={phraseHandler}
            placeholder="add a catchphrase!"
          ></textarea>
        </div>
      </div>
    </>
  );
}

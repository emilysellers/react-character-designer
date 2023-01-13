import './Selector.css';

export default function Selector({ head, setHead, top, setTop }) {
  const headHandler = (event) => {
    setHead(event.target.value);
  };
  const topHandler = (event) => {
    setTop(event.target.value);
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
        <div>Bottom selector</div>
        <div>Quotes input</div>
      </div>
    </>
  );
}

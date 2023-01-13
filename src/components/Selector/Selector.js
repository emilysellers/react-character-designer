import './Selector.css';

export default function Selector({ head, setHead }) {
  const headHandler = (event) => {
    setHead(event.target.value);
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
        <div>Top selector</div>
        <div>Bottom selector</div>
        <div>Quotes input</div>
      </div>
    </>
  );
}

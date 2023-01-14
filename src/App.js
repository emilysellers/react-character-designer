// import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import background from './waves.jpeg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Main />
    </div>
  );
}

export default App;

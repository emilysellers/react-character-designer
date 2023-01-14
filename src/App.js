// import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import background from './waves.jpeg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

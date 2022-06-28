import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Meme from './component/Meme';

function App() {
  return (
    <div className="App">
      <Header title='meme generator' />
      <Meme />
    </div>
  );
}

export default App;

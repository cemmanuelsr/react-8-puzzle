import './App.css';
import Board from './components/board/Board';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App" >
      <h1 class="title">8 Puzzle</h1>
      <Board />
      <Button />
    </div>
  );
}

export default App;

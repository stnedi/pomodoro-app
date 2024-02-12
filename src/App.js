import './App.css';
import Timer from './components/Timer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Timer />
        {/* Any other content */}
      </header>
    </div>
  );
}

export default App;

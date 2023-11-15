import logo from './logo.svg';
import './App.css';
import DataFetcher from "./components/DataFetcher";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>React App</h1>
          <DataFetcher />
        </header>
      </div>
  );
}

export default App;

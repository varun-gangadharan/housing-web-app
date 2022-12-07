import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HomePage></HomePage>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Valencia"/>
      </div>
      <footer>
        <a href="https://github.com/EstherSauri/weather-react" className="github-link">Open-source code</a> by Esther Sauri
      </footer>
    </div>
  );
}


import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
    
        <Weather defaultCity="New York" />
        <footer>
          This page was coded by <a href="https://github.com/Xolo29-star" target="_blank" rel="noreferrer">Noxolo Gama</a> and open-sourced on <a href="https://github.com/Xolo29-star/reactweatherapp/tree/master" target="_blank" rel="noreferrer">Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;

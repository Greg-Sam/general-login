import logo from './logo.svg';
import './App.css';

import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>General Login</h1>
        <p>
          To get started, chose a login option
        </p>
      <Facebook />
      </header>
    </div>
  );
}

export default App;

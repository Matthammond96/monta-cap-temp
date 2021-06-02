import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { BackgroundLogo } from './Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
      <div className="Background-Logo"><BackgroundLogo /></div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [ping, setPing] = useState('ping')

  useEffect(() => {
    fetch('/ping').then(res => res.json()).then((j) => {
      setPing(j.data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        
        Welcome to the pings of pongs - {ping} 
      </header>
    </div>
  );
}

export default App;

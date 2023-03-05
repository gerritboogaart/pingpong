import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [ping, setPing] = useState('ping')

  useEffect(() => {
    fetch('/ping').then(res => res.json()).then((j) => {
      console.log(j)
      setPing(j.data)
    })
  }, [])

  console.log(ping)
  return (
    <div className="App">
      <header className="App-header">
        
        Hello World - {ping} 
      </header>
    </div>
  );
}

export default App;

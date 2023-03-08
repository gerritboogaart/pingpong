import './App.css';
import { useEffect, useState } from 'react';
import { Notes } from './components/Notes';

const FAKE = [
  {
    body: 'Hello World',
    bg: 'green'
  }
]

function App() {
    const [notes, setNotes] = useState(FAKE)
  // const [ping, setPing] = useState('ping')

  // useEffect(() => {
 
  //   })
  // }, [])

  const renderNotes = () => {
    return notes.map(n => {
      return <Notes bg={n.bg} body={n.body} />
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        {renderNotes()}
       
      </header>
    </div>
  );
}

export default App;

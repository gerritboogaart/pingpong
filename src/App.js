import './App.css';
import { useEffect, useState } from 'react';
import { Notes } from './components/Notes';

const FAKE = [
  {
    body: 'Hello World',
    bg: 'green',
    left: '100',
    top: '200',
    zIndex: '1'
  },
  {
    body: 'Second Hello World',
    bg: 'red',
    left: '300',
    top: '300',
    zIndex: '2'
  }
]

function App() {
    const [notes, setNotes] = useState(FAKE)
  // const [ping, setPing] = useState('ping')

  useEffect(() => {
    const res = localStorage.getItem('notes')
    console.log('useff.', res)
    if (res) {
      const json = JSON.parse(res)
      setNotes(json)
    } else {
      const json = JSON.stringify(FAKE)
      localStorage.setItem('notes', json)
      setNotes(FAKE)
    }
  }, [])



  const renderNotes = () => {
    return notes.map(n => {
      return <Notes 
        bg={n.bg} 
        body={n.body} 
        zindex={n.zIndex} 
        left={n.left}
        top={n.top}
      />
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

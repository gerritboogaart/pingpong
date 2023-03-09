import './App.css';
import { useEffect, useState } from 'react';
import { Notes } from './components/Notes';
import styled from 'styled-components';
import { NewNote } from './components/NewNote';

const FAKE = [
  {
    title: 'First one',
    body: 'Hello World',
    bg: 'green',
    left: '100',
    top: '200',
    zIndex: '1'
  },
  {
    title: 'second',
    body: 'Second Hello World',
    bg: 'red',
    left: '300',
    top: '300',
    zIndex: '2'
  }
]

const Button = styled.div`
  cursor: pointer;
  width: 9rem;
  height: 25px;
  font-size: 20px;
  position: absolute;
  left: 10px;
  top: 10px;
  background: white;
  color: black;
`

function App() {
    const [notes, setNotes] = useState([])
  // const [ping, setPing] = useState('ping')
  const [showForm, setShowForm] = useState(false)

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

  const addNote = (note) => {
    const zIndex = notes.reduce((acc, note) => {
      if (Number(note.zIndex) > acc) acc = Number(note.zIndex)
      return acc
    }, 0).toString()
   
    const newNote = {...note, left: '500', top: '300', zIndex }
    console.log('saving', zIndex, newNote)
    const nextNotes = [...notes, newNote]
    setNotes(nextNotes)
    const json = JSON.stringify(nextNotes)
    localStorage.setItem('notes', json)
  }

  const renderNotes = () => {
    return notes.map(n => {
      return <Notes 
        bg={n.bg} 
        body={n.body} 
        zindex={n.zIndex} 
        left={n.left}
        top={n.top}
        title={n.title}
      />
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setShowForm(!showForm)}>New Note</Button>
        {renderNotes()}
        {showForm && <NewNote hideModal={setShowForm} addNote={addNote} />}
      </header>
    </div>
  );
}

export default App;

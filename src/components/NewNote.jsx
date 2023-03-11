import { useState } from "react"
import styled from "styled-components"

const ButtonWrapper = styled.div`
  text-align: center;
  flex: 1;
`

const Line = styled.div`
  display: block;
  line-height: 14px;

  label {
    font-size: 16px;
    width: 5rem;
    display: inline-flex;
  }

  input,
  textarea {
    padding: 4px;
    color: #726060;
  }
  textarea {
    margin: 10px 0px;
  }
`

const FormFooter = styled.div`
  Line {
    display: flex;
  }
`

const Form = styled.div`
  position: absolute;
  z-index: 1000;
  background: white;
  width: 300px;
  height: 220px;
  padding: 1rem;
  border: 1px solid lightgrey;
  color: darkslategrey;
  title {
    display: inline-block;
    padding-bottom: 8px;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 8px;
    width: 92%;
  }
  main {
    height: 10rem;
  }
`
export const NewNote = ({ hideModal, addNote }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [color, setColor] = useState("grey")
  return (
    <Form>
      <title>Add new Note:</title>
      <main>
        <Line>
          <label>Title</label>
          <input
            value={title}
            type='text'
            onChange={(e) => setTitle(e.target.value)}
          />
        </Line>
        <Line>
          <label style={{ position: "relative", top: "-38px" }}>Body</label>
          <textarea
            rows='4'
            value={body}
            type='textarea'
            onChange={(e) => setBody(e.target.value)}
          />
        </Line>
        <Line>
          <label>Color</label>
          <input
            value={color}
            type='text'
            onChange={(e) => setColor(e.target.value)}
          />
        </Line>
      </main>
      <FormFooter>
        <Line style={{display: 'flex'}}>
          <ButtonWrapper>
            <button onClick={() => hideModal()}>Cancel</button>
          </ButtonWrapper>
          <ButtonWrapper>
            <button
              onClick={() => {
                const note = {
                  title,
                  body,
                  bg: color,
                }
                addNote(note)
                hideModal()
              }}
            >
              Save
            </button>
          </ButtonWrapper>
        </Line>
      </FormFooter>
    </Form>
  )
}

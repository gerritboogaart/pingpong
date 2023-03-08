
import { useState } from "react"
import styled from "styled-components"

const Note = styled.div`
    width: 100px;
    height: 100px;
    background: ${props => props.bg};
    position: absolute;
    z-index: ${props => props.zindex};
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    cursor: move;
    display: ${props => props.display};

`
export const Notes = ({bg, body, zindex, left, top}) => {
    const [display, setDisplay] = useState('block')
    const [pos, setPos] = useState({ left, top })
    const [zz, setZz] = useState(zindex)
    console.log(bg, body,zz)

    return <Note 
        display={display}
        bg={bg || 'white'} 
        zindex={zz}
        left={pos.left}
        top={pos.top}
        onDragEnd={(e) => {
            console.log('stop: ', e)
            setPos({left: e.clientX, top: e.clientY})
            setZz(Number(zz) + 10)
        }}
        onDragStart={(e) => {
            console.log('start', e)
            // setDisplay('none')


        }}
        draggable={true}
        >{body}</Note>
}
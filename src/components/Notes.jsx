
import { useState } from "react"
import styled from "styled-components"

const Note = styled.div`
    width: 250px;
    height: 150px;
    background: ${props => props.bg};
    position: absolute;
    z-index: ${props => props.zindex};
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    cursor: move;
    display: ${props => props.display};
    font-size: 14px;

`
const Title = styled.div`
    font-size: 16px;
    line-height: 2rem;
    width: 100%;
    border-bottom: 1px solid lightgrey;
`

const Body = styled.div`
    padding: 10px;
    font-size: 13px;
    text-overflow: ellipsis;
    height: 92px;
    overflow: hidden;
    text-align: left;
`
export const Notes = ({bg, body, zindex, left, top, title}) => {
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
            setDisplay('block')


        }}
        draggable={true}
        >
            <Title>{title}</Title>
            <Body>{body}</Body>
        </Note>
}
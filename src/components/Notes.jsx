
import styled from "styled-components"

const Note = styled.div`
    width: 100px;
    height: 1oopx;
    background: ${props => props.bgcolor}
`
export const Notes = ({bg, body}) => {

    return <Note bg={bg || 'white'}>{body}</Note>
}
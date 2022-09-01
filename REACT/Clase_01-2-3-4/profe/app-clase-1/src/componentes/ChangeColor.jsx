import { useRef } from 'react'
import styled from 'styled-components' // importacion del framework

const ChangeColor = () => {
    const Box = styled.div`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;

    & h4{
        margin:0;
        text-align: center;
        color: #FF5151;
        cursor: pointer;
    }
    & :hover{
        color:blue;
    }
    `
    const title = useRef(null)

    const handleTitleColor = () => {
        console.log(title.current.color);
        title.current.style.color = "red";
    }

    return (
        <>
            <h2 ref={title}>Titulo</h2>
            <button onClick={handleTitleColor}>Change Color</button>
            <Box>
                <h4>Probando Funciones avanzadas</h4>
            </Box>
        </>
    )
}

export default ChangeColor
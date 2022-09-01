import React from 'react'
import Login from './Login';
import Logout from './Logout';

const Propiedades = (props) => {
    console.log(props);
    const { cadena, number, booleano, array, objeto } = props
    return (
        <>
            <p style={{ color: 'orange', borderRadius: '25px' }}>{cadena}</p>
            <p style={myStyles}>{number}</p>
            <p>{booleano}</p>
            <ul>{booleano ? array.map((elem, i) => <li key={i} >{i}) {elem}</li>) : <div>Cargando...</div>}</ul>
            <div className='titulo'>Nombre: {objeto.nombre}</div>
            <div>Apellido: {objeto.apellido}</div>
            <div>{booleano ? <Login /> : <Logout />}</div>
        </>
    )
}

export let myStyles = {
    background: "black",
    color: 'white'
}

export default Propiedades

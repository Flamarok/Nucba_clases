import React  from "react";
import Login from "./Login";
import Logout from "./Logout";

const Propiedades = (props) => {
    console.log(props);
    const {cadena, number, booleano, array } = props
    return (
        <>
            <p style={{color: 'blue', fontSize:"25px"}}>{cadena}</p>
            <p style={myStyles}>{number}</p>
            <p>{booleano}</p>
            <ul> {booleano ? array.map((elem, i) => <li key={i}> {elem} </li>) : <div> No existen elementos </div>} </ul>
            // La i es el indice de los elementos y lo ponemos en la key ya que react lo pide o genera error.
            // Cada hijo en la lista tiene que tener su Key de propiedades, para distinguir uno del anterior.
            <div className="titulo">Nombre: {props.objeto.nombre}</div> // no está desestructurado
            <div>Apellido: {props.objeto.apellido}</div>
            <div>{ booleano ? <Login /> : <Logout />}</div>
        </>
    )
}

export let myStyles = {
    background: "black",
    color: "white"
}

export default Propiedades
import React, { useState } from 'react'

const Contador = () => {
    let inicial = 0
    const [contador, setContador] = useState(0)
    const [toggle, setToggle] = useState(false)
    
    const sumar=()=>{
        setContador((contador) => contador + 1) // setContador (el hook) se le coloca entre parentesis "(contador)" ya que espera un parámetro que se ve en el useState como "0"
    }

    const restar=()=>{
        setContador((contador) => contador < 0 ? contador = 0 : contador - 1)
    }

    const reset=()=>{
        setContador(0)
    }

    const handleToggle = () => {
        console.log("Toggle")
        setToggle(!toggle)
    }

    // estos setContador se pueden colocar directamente dentro del evento onClick
    return (
        <>
           {/*  <label>Contador: {contador}</label>  */}// se coloca la variable para que sea dinamico y se vea reflejado el estado inicial. 

            <label>{contador >= 0 ? contador : 'No se puede mostrar valores negativos'}</label> // en este caso se coloca el ternario para consultar, si el estado es mayor o igual a 0 muestra el valor del estado, sino muestra el string.

            <button onClick={sumar}>+</button> // utilizamos el evento onClick
            <button onClick={restar}>-</button>
            <button onClick={reset}>Reset</button>

            <div>
                
                <button onClick={handleToggle}>
                    Toggle
                </button>
                {!toggle ? " " : // se niega el toggle para que funcione con el verdadero
                (<div>
                    Verdadero
                    <h1>{contador}</h1>
                    <h2>Hola</h2>
                    <h2>Como</h2>
                    <h3>Esta</h3>
                </div>)}
                    // Esto Funciona como menú desplegable
            </div>
        </>
    )
}
/* 
opcion 2:
    const Contador = () => {
    let inicial = 0
    const [contador, setContador] = useState(inicial)
    
    return (
        <>

           <label>{contador >= 0 ? contador : 'No se puede mostrar valores negativos'}</label> 

           <button onClick={() => setContador(contador + 1)}>+</button> // utilizamos el evento onClick
           <button onClick={() => setContador(contador - 1)}>-</button>
           <button onClick={() => setContador(inicial)}>Reset</button>
       </>
   )
}

*/

export default Contador
 
// Tarea, realizar la resta y el reset

/*
    <button onClick={() => setContador(inicial)}>Reset</button>
    <button onClick={() => setContador(prevContador => prevContador - 1)}>-</button>
    <button onClick={() => setContador(postContador => postContador + 1)}>+</button>
*/

import React, { useState } from 'react'
// import Form from './OnSubmit'

const Contador = () => {
    // let inicial = 0
    const [contador, setContador] = useState(0)
    const [form, setForm] = useState('')
    const sumar=()=>{
        setContador((contador) => contador + 1) // setContador (el hook) se le coloca entre parentesis "(contador)" ya que espera un parámetro que se ve en el useState como "0"
    }

    const restar=()=>{
        setContador((contador) => contador < 0 ? contador = 0 : contador - 1)
    }

    const reset=()=>{
        setContador(0)
    }

    // estos setContador se pueden colocar directamente dentro del evento onClick

    const handleChange = () => {
        // console.log("Disparado")
        console.log(e)
        setForm(e.target.value)
    }
    return (
        <>
           {/*  <label>Contador: {contador}</label>  */}// se coloca la variable para que sea dinamico y se vea reflejado el estado inicial. 

            <label>{contador >= 0 ? contador : 'No se puede mostrar valores negativos'}</label> // en este caso se coloca el ternario para consultar, si el estado es mayor o igual a 0 muestra el valor del estado, sino muestra el string.

            <button onClick={sumar}>+</button> // utilizamos el evento onClick
            <button onClick={restar}>-</button>
            <button onClick={reset}>Reset</button>
            <div>
                <input type="text" placeholder='Nombre' value={form} onChange={handleChange}/> // el valor debe tener el nombre del estado del hook
                <div>{form}</div>
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

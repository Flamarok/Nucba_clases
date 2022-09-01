import React from "react";
import { decrement } from "../actions/counterAction";
import { useDispatch } from 'react-redux';

const Substract = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(decrement())}>-</button> // trae la accion del DECREMENT
    )
}

export default Substract
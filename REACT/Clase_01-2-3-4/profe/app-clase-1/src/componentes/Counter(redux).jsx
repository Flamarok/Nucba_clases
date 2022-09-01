import React from "react";
import { useSelector } from 'react-redux'

export const Counter = () => {
    const state = useSelector(state => state.counter)   // hace referencia al counter declarado en el store
    console.log(state);
    return(
        <>
        <Substract/>
            {state.count}
        <Add/>
        </>
    )
}
import React from 'react'
import { useSelector } from 'react-redux'
import Add from './Add'
import Substract from './Substract'


const Counter = () => {
    const state = useSelector(state => state.counter) // permite acceder al estado global con el useSelector, es el counter del index(reducers)
    // const state = useSelector(state => state.este_varía_segun_el_reducer) uno de estos por reducers creados.
    console.log(state);
    return (
        <>
            <Substract />
            {state.count}
            <Add />
        </>
    )
}

export default Counter
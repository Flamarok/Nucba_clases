import { increment } from "../actions/counterAction";
import { useDispatch } from 'react-redux';

const Add = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(increment())}>+</button> // trae la accion del INCREMENT
    )
}

export default Add
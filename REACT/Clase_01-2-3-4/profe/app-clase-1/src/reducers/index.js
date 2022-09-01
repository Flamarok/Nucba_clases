import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

const reducer = combineReducers ({
    counter:counterReducer
    //paciente: pacienteReducer, // otro reducer para combinar y conectarlos
});

export default reducer
import {combineReducers}from 'redux';
import CakeReducer from './Reducers/CakeReducer';
import CounterReducer from './Reducers/CounterReducer';
import PersonReducer from './Reducers/PersonReducer';
import CartReducer from './Reducers/CartReducer';

const rootCombine = combineReducers({
    CountRecord:CounterReducer,
    CountCake:CakeReducer,
    PersonRecord:PersonReducer,
 
})


export default rootCombine;
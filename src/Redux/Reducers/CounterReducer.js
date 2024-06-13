
import {INCREMENT,DECREMENT,RESET} from '../action'

let initialValue = {
     CountData:0
};

 const CounterReducer = (state=initialValue,action)=>{
  switch (action.type)
  {
    case INCREMENT:
         return {
          ...state,CountData:state.CountData+1
         }
 
    case DECREMENT:
     return {
          ...state,CountData:state.CountData-1
         }
    case RESET:
     return {
          ...state,CountData:state=0
         }
    default:
         return state;
  }
}


export default CounterReducer;

import {CAKEDECREMENT,CAKEINCREMENT,CAKERESET} from '../action';

let initialValue = {
     CakeData:0
};

 const CakeReducer = (state=initialValue,action)=>{
  switch (action.type)
  {
    case CAKEINCREMENT:
         return {
          ...state,CakeData:state.CakeData+1
         }
 
    case CAKEDECREMENT:
     return {
          ...state,CakeData:state.CakeData-1
         }
    case CAKERESET:
     return {
          ...state,CakeData:state=0
         }
    default:
         return state;
  }
}


export default CakeReducer;
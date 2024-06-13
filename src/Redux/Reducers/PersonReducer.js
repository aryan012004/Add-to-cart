
import {ADDRECORD,DELETERECORD,GETRECORD} from '../action'

const initialValue = {
     person:[]
};

 const PersonReducer = (state=initialValue,action)=>{
     console.log(action.paylod)
  switch (action.type)
  {
    case ADDRECORD:
         return {
          ...state,person:[...state.person,action.payload]
         }
    case DELETERECORD:
     return{
          ...state,person:state.person.filter((v,i)=>v.id!=action.payload)
     }
    case GETRECORD:
      return state;
   
    default:
         return state;
  }
}


export default PersonReducer;
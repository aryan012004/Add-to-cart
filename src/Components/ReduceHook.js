import {useReducer} from 'react'
 var InitialState = 0
 const reducer = (state,action)=>
{

   switch(action)
   {

       case 'increament':
        return state+1;
        break;

        case 'decreament':
        return state-1;
        break;
        case 'reset':
        return 0;
        break;
        default:
            return state;


   }
}

    

function ReduceHook()
{
    const [count,dispatch] = useReducer(reducer,InitialState)
     return(
        <div>
              <h3>Count ={count}</h3>
              <input type='submit' value='increament' onClick={()=> dispatch('increament')}/>
              <input type='submit' value='reset' onClick={()=> dispatch('reset')}/>
              <input type='submit' value='decreament' onClick={()=> dispatch('decreament')}/>
        </div>
     )
  
}
export default ReduceHook;
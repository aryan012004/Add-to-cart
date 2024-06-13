import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Redux/Actions/CounterAction";


function Counter()
{
    let Count= useSelector(state=>state.CountRecord.CountData)
    let dispatch = useDispatch();
    console.log(Count)
    return(
        <div>
            <h1>Counte:{Count}</h1>
            <button onClick={()=>dispatch(increment())}> Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
        </div>
    )
}
export default Counter;
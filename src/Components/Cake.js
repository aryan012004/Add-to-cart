import { useDispatch, useSelector } from "react-redux";

import { cake_decrement, cake_increment, cake_reset } from "../Redux/Actions/CakeAction";


function Cake()
{
    let Count= useSelector(state=>state.CountCake.CakeData)
    let dispatch = useDispatch();
    return(
        <div>
            <h1>Cake_Counter:{Count}</h1>
            <button onClick={()=>dispatch(cake_increment())}> Increment</button>
            <button onClick={()=>dispatch(cake_decrement())}>Decrement</button>
            <button onClick={()=>dispatch(cake_reset())}>reset</button>
        </div>
    )
}
export default Cake;
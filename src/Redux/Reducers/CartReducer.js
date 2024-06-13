import {CARTRECORD}from '../action';

const initialValue ={
    Cart : [{name:'sss',price:'123'}]
}

const CartReducer = (state=initialValue,action)=>{
    switch(action.type)
    {
        case CARTRECORD:
            return state+1;
    }

}

export default CartReducer;
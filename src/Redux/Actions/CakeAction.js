import {CAKEDECREMENT,CAKEINCREMENT,CAKERESET} from '../action';


  export const cake_increment =() =>{
    return{
        type:CAKEINCREMENT
    }   
  }
  export const cake_decrement =() =>{
    return{
      type:CAKEDECREMENT
    }
  }



  export const cake_reset =() =>{
    return{
      
      type:CAKERESET,
    }
  }


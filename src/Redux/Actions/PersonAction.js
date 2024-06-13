import {ADDRECORD,GETRECORD,DELETERECORD} from '../action';

export const addrecord =(record) =>{
    console.log(record)
    return{
        type:ADDRECORD,
        payload:record
    }   
  }
  export const getrecord =() =>{
    return{
      type:GETRECORD
    }
  }



  export const deleterecord =(id) =>{
    return{
      
      type:DELETERECORD,
      payload:id
    }
  }


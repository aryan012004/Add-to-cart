import { useState } from "react";
import { useDispatch, useSelector }from 'react-redux'
import { addrecord, deleterecord } from "../Redux/Actions/PersonAction";

function Person()
{
    let PersonInfo= useSelector(state=>state.PersonRecord.person);
    let [person,setperson]=useState({})
    let dispatch = useDispatch();
    let getinputValue = (e)=>{
        let name= e.target.name;
        let value=e.target.value;
        let newdata = {...person,[name]:value};
        setperson(newdata);
        
        
    }
    let submitdata=(e)=>{
        e.preventDefault();
        person.id = Math.round(Math.random()*1000)
        dispatch(addrecord(person));
        setperson({})
    }

    return(
        <div>
            <h1 style={{textAlign:'center'}}>ADD RECORD</h1>
            <form method="post" onSubmit={(e)=>submitdata(e)}>
                <table border={1} align="center" style={{backgroundColor:'grey',padding:'30px',border:'1px solid black'}}>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="name" value={person.name?person.name:'' } onChange={(e)=>getinputValue(e)}/></td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td><input type="text" name="age" value={person.age?person.age:''} onChange={(e)=>getinputValue(e)}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" style={{backgroundColor:'#8577d9',padding:'10px'}}/></td>
                        </tr>
                </table>
            </form>
            <h1 style={{textAlign:'center'}}>View Person</h1>
            <table border={1} align="center">
                <tr style={{backgroundColor:'#e75757',padding:'30px',border:'1px solid black'}}>
                    <td>No</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Action</td>
                </tr>
                {PersonInfo?PersonInfo.map((v,i)=>{
                   return(
                    <tr style={{backgroundColor:'#bbb75f',padding:'30px',border:'1px solid black'}}>
                        <td>{++i}</td>
                        <td>{v.name}</td>
                        <td>{v.age}</td>
                        <td>
                            <button onClick={()=>deleterecord(v.id)}>Delete</button>
                        </td>
                     </tr>
                   )
                }):''}

            </table>

        </div>
    )
}

export default Person
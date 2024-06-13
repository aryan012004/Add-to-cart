import { useState } from 'react';


function View()
{
    let [data, setData] = useState([]);
    let [title,setuser]=useState('')
    return(

        <div>
            <div>

                    <input type="text" placeholder="Searchin by email" name='title'onChange={(e)=> setuser(e.target.value)}/>
            </div>
            {data.
             filter((v,i)=>{
                if(v.title.toLowerCase().includes(title.toLowerCase()))
                {
                    return v;
                }  
            })
            .map((v,i)=>{
            
                return(
                <div style={{border:'1px solid black'}}>
                <h3>Product{i++}</h3>
                    <img style={{height:'200px',width:'244px'}} src={v.image} />
                    <h2>Title: {v.title}</h2>
                    <h2>Price: {v.price}</h2>
                    <h2>Descrition: {v.description}</h2>
                   
                </div>
                )
            })}
        </div>
    )
}
export default View;
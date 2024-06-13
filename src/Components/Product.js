
import { useEffect, useState } from 'react';

function Product()
{
    let [person, setPerson] = useState({});
    let [data, setData] = useState([]);
   

    useEffect(() => {
        setTimeout(() => {
          let localRecord = JSON.parse(localStorage.getItem('data'));
          if (localRecord == null) {
            setData([]);
          }
          else {
            setData(localRecord)
          }
        }, 1000)
      }, setData);

    let getInputvalue = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == "image")
        {
          if(e.target.file)
          {
            value = URL.createObjectURL(e.target.file[0]);
          }
        }
    
        let newData = { ...person, [name]: value }
        setPerson(newData);
    
      }

    

    let formsubmit = (e) =>{
        e.preventDefault();
        person['id'] = Math.round(Math.random() * 1000);
    
        var confirm = window.confirm("Are You Sure");
        if (confirm) {
          var newRacord = ([...data, person])
          setData(newRacord);
          localStorage.setItem('data', JSON.stringify(newRacord));
        }
        setPerson({})

    }
   function AddCart()
   {
      console.log("length")
   }
    return(
        <>
    
       
            <form method="post" onSubmit={(e) => formsubmit(e)}>
        <table border={1}>
                    <tr>
                        <td>Product name:</td>
                        <td><input type="file" name="image"  onChange={(e) => getInputvalue(e)}    /></td>
                    </tr>
                    <tr>
                        <td>Product name:</td>
                        <td><input type="text" name="title" value={person.title ? person.title : ""} onChange={(e) => getInputvalue(e)}    /></td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td><input type="text" name="price" value={person.price ? person.price : ""} onChange={(e) => getInputvalue(e)}    /></td>
                    </tr>
                    <tr>
                        <td>Descrition</td>
                        <td> <textarea name='description' value={person.description ? person.description : ""}  onChange={(e) => getInputvalue(e)}    /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type='submit' /></td>
                    </tr>
        </table>
            </form>

 
         {/* <button  onClick={(e)=>Cart(e)}>Cart</button> */}

         {data.map((v,i)=>{
           console.log(v.image)
            return(
            <div style={{border:'1px solid black'}}>
               <h3>Product{i++}</h3>
                 <img style={{height:'200px',width:'244px'}} src={v.image} />
                <h2>Title: {v.title}</h2>
                <h2>Price: {v.price}</h2>
                <h2>Descrition: {v.description}</h2>
                <button onClick={AddCart()}>Add to Cart</button>
            </div>
            )
          })}
            
        </>

    )
}
export default Product;
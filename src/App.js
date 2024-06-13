import logo from './logo.svg';
import './App.css';


// import C from './Components/C';
// import React, { useState } from 'react';
// import {createContext} from 'react'
import View from './Components/View';
import Product from './Components/Product';
import Memo from './Components/Memo';
import Counter from './Components/Counter';
// import ReduceHook from './Components/ReduceHook';
// import ToDo from './Components/ToDo';

// export const datacontexts = React.createContext();
import {Provider}from 'react-redux';
import store from './Redux/store';
import Cake from './Components/Cake';
import Person from './Components/Person';

function App() {
  // const [person,setpaeron] = useState({name:"Aryan",Age:20,Course:'front-end'});
  return (
   <Provider store={store}>
    <div>
      <Person/>
       {/* <Counter/> */}
        {/* <Product/>
        <View/> */}
        {/* <ReduceHook/> */}
        {/* <ToDo/> */}
        {/* <Memo/> */}
        {/* <Cake/> */}
        {/* <Add_to_cart/> */}
    </div>
    </Provider>
  );
}

export default App;

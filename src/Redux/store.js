import {createStore} from 'redux'
import rootCombine from './rootCombine';
   
let store = createStore(rootCombine);


export default store;
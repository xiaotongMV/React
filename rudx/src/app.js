// import './loglog';

import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
let sub = document.getElementsByClassName('decrement')[0],
    input = document.getElementsByClassName('input')[0],
    increment = document.getElementsByClassName('increment')[0],
    odd = document.getElementsByClassName('odd')[0],
    async = document.getElementsByClassName('async')[0]


//定义reducer
function reducer(state=0,action){
    let {type} = action;
    switch (type) {
        case 'INCREMENT':
            return ++state;
            break;
        case 'DECREMENT':
            return --state;
            break;
        default:
            return state;
    }
}

function increment(){
    return {type:'INCREMENT'}
}
function decrement() {
    return { type: 'DECREMENT' }
}

let store = createStore(reducer,applyMiddleware(thunk));

sub.onclick = ()=>{
    store.dispatch(decrement())
}
odd.onclick = () => {
    let value = store.getState();
    if(value%2!==0){
        store.dispatch(increment())
    }
}
increment.onclick = () => {
    store.dispatch(increment())
}
async.onclick = () => {
    setTimeout(() => {
        store.dispatch(increment())
    }, 1000);
    
}

input.value = store.getState();

store.subscribe(()=>{
    input.value = store.getState();
})
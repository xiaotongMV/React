import { createStore } from "redux";


let async = document.getElementsByClassName('async');

//声明reducer，是一个函数
function logData(state,action){
    let {type} = action;
    switch (type) {
        case 'INCREMENT':
            ++state;
            break;

        default:
            return state;
    } 
}

let store = createStore(logData,0);

async.onclcik = ()=>{
    store.dispatch({ 'type': 'INCREMENT'})
}

store.subscribe(()=>{
    console.log(store.getState())
})
//store.dispatch('type', 'INCREMENT')



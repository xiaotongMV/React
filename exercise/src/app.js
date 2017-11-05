import React,{ Component } from "react";
import ReactDOM from "react-dom";


import Div from "./component/Div";


import "./common/style/style.css";


class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="box">
                <Div name="React"></Div>
            </section>
            
        )
    }
}


ReactDOM.render(
        <App/>,
        document.getElementById('root')
)
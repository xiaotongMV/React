import React, { Component } from "react";

import "./style.css";


export default class Div extends Component{
    constructor(props){
        super(props);
    } 


    render(){
        return (            
            <div className="con">
                <input type="button" value="按钮"/>
                <div className="left">Hello,{this.props.name}</div>
            </div>
        )
    }
}
import React, { Component } from "react";

import "./style.css";


export default class Div extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            marginLeft:0,
            onOff:true
        }
        this.timer = null;
        this.moveBox = this.moveBox.bind(this)
    } 

    moveBox(){
        let {timer} = this;
        let {onOff,marginLeft} = this.state;

        if(onOff){
            clearInterval(timer);
            this.timer  = setInterval( ()=>{
                this.setState({
                    marginLeft:++marginLeft   
                })
                console.log(this.state.marginLeft)
            },)
        }else{
            clearInterval(timer);
        }
        this.setState({
            onOff:!onOff
        })
    }

    render(){
        let {marginLeft} = this.state;
        let {moveBox} = this;

        return (            
            <div>
                <button 
                    onClick= {this.moveBox}
                >按钮</button>
                <div className="left" style={{
                    marginLeft: marginLeft
                }}></div>
            </div>
        )
    }
}
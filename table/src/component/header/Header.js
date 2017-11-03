import React,{ Component } from "react";

import './style.css';

export default class Header extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <header>
                <div class="left">
                    <a href="javascript:;" className="wy"></a>
                    <a href="javascript:;" className="wy126"></a>
                    <a href="javascript:;" className="yeah"></a>
                </div>
                <h2>中国第一大电子邮件服务商</h2>
                <div className="right">
                    <span className="duo">了解更多</span>
                    <span>反馈意见</span>
                </div>
            </header> 
        )
    }
}
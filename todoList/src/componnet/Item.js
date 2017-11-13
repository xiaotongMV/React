import React,{ Component } from "react";

export default class extends Component{
    constructor(props) {
        super(props);
    }
    render (){
        let { 
            id,
            content,
            isActive,
            todoChange,
            deleteToto
        } = this.props;
        return(
                <li 
                    className= { isActive? '' :"completed"}
                >
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={!isActive}
                        onChange={() => todoChange(id)}
                    />
                    <label>{content}</label>
                    <button 
                        className="destroy" 
                        onClick={() => deleteToto(id)}
                    />
                </div>
                <input
                    ref="editField"
                    className="edit"
                />
                </li>
            );
    }
}

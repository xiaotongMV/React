import React,{ Component } from "react";
import ReactDOM from "react-dom";

import Item from "./componnet/Item";

import Footer from "./componnet/Footer";

import './common/style/index.css';
import './common/style/base.css';

//import todosData from "./common/data/todosData";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputVal:'',
            todosData:[],
            view:'all',
        }
        this.inputChange = this.inputChange.bind(this);
        this.inputOnEnder = this.inputOnEnder.bind(this);
        this.todoChange = this.todoChange.bind(this);
        this.deleteToto = this.deleteToto.bind(this);
        this.taggleAll = this.taggleAll.bind(this);
        this.changeView = this.changeView.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);        
    }
    //获取当前输入的value值
    inputChange(ev){
       //s console.log(ev.target.value)
       let {value} = ev.target;

        this.setState({
            inputVal:ev.target.value
        });
    }
    //键盘回车添加一个todo事件
    inputOnEnder(ev){
        if(ev.keyCode!==13) return;

        let {value} = ev.target;
        let {todosData} = this.state;

        if(!value.trim()) return
        this.setState({
            todosData:[
                ...todosData,
                {
                    id:Math.random(),
                    content: value,
                    isActive:true                  
                }
            ],
            inputVal: ''
        });
    }
    //改变一个todo是否被完成
    todoChange(id){
        let {todosData} = this.state;
        
        let newTodos = todosData.map((todo,indx)=>{
            if(todo.id === id){
                todo.isActive = !todo.isActive;
            }
            return todo;
        });

        this.setState({
            todosData:newTodos
        })
    }
    //删除一个todo
    deleteToto(id){
        let { todosData } = this.state;
        //filter 回调函数返回true，元素会被保留
        let newTodos = todosData.filter((todo, indx) => {            
            return todo.id ===id ? false:true
        });

        this.setState({
            todosData: newTodos
        })
    }
    //全选
    taggleAll(ev){
        // console.log(11111)
        let {checked} = ev.target;
        let {todosData} = this.state;
        
        this.setState({
            todosData:todosData.map(elt=>{
                elt.isActive = !checked
                return elt;
            })
        })
    }

    //切换显示不同的状态 todo
    changeView(view){
        this.setState({
            view
        })
    }
    //清除已完成
    clearCompleted(){
        let {todosData} = this.state;

        let newTodos = todosData.filter((todo,indx)=>{
            return todo.isActive ? true:false
        });
        
        this.setState({
            todosData:newTodos
        })
    }
    
    render(){
        
        let { 
            inputChange, 
            inputOnEnder, 
            todoChange, 
            deleteToto,
            taggleAll,
            changeView,
            clearCompleted
        } = this;
        let { inputVal, todosData, view} = this.state;
        
        let todosLength = todosData.length;
        
        let leftCount = todosLength;

        let filteredTodosData = todosData.filter((elt, indx, arr) => {
            let { id, content, isActive } = elt;

            let shouldStay = false;

            if (!isActive) leftCount--;

            switch (view) {
                case 'active':
                    if (isActive === true) {
                        shouldStay = true;
                    }
                    break;
                case 'completed':
                    if (isActive === false) {
                        shouldStay = true;
                    }
                    break;

                default:
                    shouldStay = true;
            }
            return shouldStay;
        });
        console.log(filteredTodosData)
        let todosComponent = filteredTodosData.map( ({id,isActive,content})=>{

            return (
                <Item 
                    key={id}
                    {...{
                        id,
                        content,
                        isActive,
                        todoChange,
                        deleteToto
                    }}
                />
            )
            
        });
        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"                       
                        autoFocus={true}
                        value = {inputVal}
                        onChange={inputChange}
                        onKeyDown = {inputOnEnder}
                    />
                </header> 

                {todosLength>0 ?(
                    <section className="main">
                        <input
                            className="toggle-all"
                            type="checkbox" 
                            onClick={taggleAll} 
                            checked={leftCount === 0}                     
                        />
                        <ul className="todo-list">                        
                            {todosComponent}
                        </ul>
                    </section>
                ):null}

                {todosLength>0 ? (
                    <Footer
                        {...{
                            changeView,
                            view,
                            leftCount,
                            clearCompleted: clearCompleted,
                            //只要有一个被勾选，就显示 true
                            //用所有的todo的长度和剩余没有被勾选的 todo的长度比较
                            //只要剩余的长度小于全部 todo 的长度，就说明有todo
                            showClearButton:todosLength>leftCount
                            
                        }}
                    />
                ):null}
                             
            </div>
            
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
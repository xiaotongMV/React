import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Header from './component/header/Header';
import Contest from './component/content/Contest';
import Footer from './component/footer/Footer';


import './common/style/index.css';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section className="box">
                <Header/>
                <Contest/>
                <Footer/>
            </section>
        )
    }
}




ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
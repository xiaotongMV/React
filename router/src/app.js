import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";




import Home from "./container/home/Home";
import Movie from "./container/movie/Movie";
import Teleplay from "./container/teleplay/Teleplay";
import Nav from "./component/Nav";


class App extends Component{
   

    render(){

       let {history,location,match} = this.props;

        return(
            <div>
                <Nav/>
                <Route exact={true} path="/" component={Home}/>

               
                <Route path="/teleplay" render={
                    ({history,location,match}) =>{
                        return true ? (
                            <div>
                                <h1>这是个剧集</h1>
                                <Teleplay location={location} />
                            </div>                           
                        ):(
                            <Redirect to="/movie"/>
                        )
                    }                   
                    }></Route>
                <Route path="/movie" render={
                    ({ history, location, match }) => {
                        return true ? (
                            <div>
                                <h1>这是个电影</h1>
                                <Movie location={location} />
                            </div>
                        ):(
                            <Redirect to="/teleplay"/>
                        )
                    }
                }></Route>     
            </div>
        )
        
    }
}
ReactDOM.render(
    <Router>
        <Route path='/' component={App}/>
    </Router>,
    document.getElementById('root')
)

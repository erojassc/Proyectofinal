import { Switch, Route} from "react-router-dom";
import About from "./About";
import Create from "./Create";
import Home from "./Home";

function Main(props){
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/Create' component={Create} />
        </Switch>   
    );
}

export default Main;
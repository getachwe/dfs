import "./App.css";
import Home from "./components/Home";
import Matrix from "./components/Matrix";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  

  return (
    <Router>
    <div className="App">
  
  <Switch>
    <Route path="/Matrix" component={Matrix}>
     
    </Route>   
    <Route path="/" component={Home}>
    </Route>
  </Switch>
   
    </div>
    </Router>
  );
}

export default App;

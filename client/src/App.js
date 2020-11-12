import logo from './logo.svg';
import './App.css';
import RecipeList from "./components/recipe-list.component.js";
import RecipeDetail from "./components/recipe-detail.component.js";
import RecipeAdd from "./components/recipe-add.component.js";
import RecipeEdit from "./components/recipe-edit.component.js";
import GlobalSearch from "./components/global-search.component.js";
import NavBar from "./components/navbar.component.js";

import Login from "./components/user/login.component.js";
import SignUp from "./components/user/sign-up.component.js";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div>
    <NavBar></NavBar>
    <div class="grid-container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div id="left-sidebar"></div>
      <div id="main">
        <Router id="router">
          <div className="Container">
            <br/>
            <Route path="/" exact component={RecipeList} />
            <Route path="/recipes/:id" exact component={RecipeDetail} />
            <Route path="/edit/:id" exact component={RecipeEdit} />
            <Route path="/add" exact component={RecipeAdd} />

            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />

          </div>
        </Router>
      </div>
      <div id="right-sidebar"></div>
    </div>
      
    </div>
    

  );
}

export default App;

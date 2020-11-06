import logo from './logo.svg';
import './App.css';
import RecipeList from "./components/recipe-list.component.js";
import RecipeDetail from "./components/recipe-detail.component.js";
import RecipeAdd from "./components/recipe-add.component.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="Container">
      <br/>
      <Route path="/" exact component={RecipeList} />
      <Route path="/recipes/:id" exact component={RecipeDetail} />
      <Route path="/add" exact component={RecipeAdd} />
    </div>
  </Router>
  );
}

export default App;

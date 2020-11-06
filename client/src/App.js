import logo from './logo.svg';
import './App.css';
import RecipeList from "./components/recipe-list.component.js";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="Container">
      <br/>
      <Route path="/" exact component={RecipeList} />
    </div>
  </Router>
  );
}

export default App;

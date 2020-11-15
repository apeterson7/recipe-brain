import logo from './logo.svg';
import './App.css';
import RecipeList from "./components/recipe-list.component.js";
import RecipeDetail from "./components/recipe-detail.component.js";
import RecipeAdd from "./components/recipe-add.component.js";
import RecipeEdit from "./components/recipe-edit.component.js";
import GlobalSearch from "./components/global-search.component.js";
import NavBar from "./components/navbar.component.js";
import React, { Component } from 'react';
import axios from 'axios';

import Login from "./components/user/login.component.js";
import SignUp from "./components/user/sign-up.component.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./route-component/private-route";
import Welcome from "./components/static/welcome";
import history from './common/history';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/users').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render (){
    return(
      <div>
        <NavBar loggedIn={this.state.loggedIn} username={this.state.username} updateUser={this.updateUser}></NavBar>
        <div class="grid-container">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div id="left-sidebar"></div>
          <div id="main">
            <Router id="router" history={history}>
              <div className="Container">
                <br/>
                <Switch>
                  <Route path="/" exact component={RecipeList}>
                  {this.state.loggedIn ? 
                    <RecipeList></RecipeList>
                    : <Welcome></Welcome>
                  }
                  </Route>
                  <Route path="/recipes/:id" exact component={RecipeDetail} />
                  <Route path="/edit/:id" exact component={RecipeEdit} />
                  <Route path="/add" exact component={RecipeAdd} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/signup" exact component={SignUp} />
                </Switch>
              </div>
            </Router>
          </div>
          <div id="right-sidebar"></div>
        </div>
      </div>
      )
  }  
}

export default App;

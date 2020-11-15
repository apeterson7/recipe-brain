import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    console.log('Navbar Says: '+props.loggedIn)
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/api/sessions/logout').then(response => {
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
        window.location = '/';
      }
    }).catch(error => {
        console.log(error)
        console.log('Logout error')
    })
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">Recipe Brain</a>
          <div id="navbarNav">
            { this.props.loggedIn ? <div> Hey, {this.props.username} </div> : null }
            {
              this.props.loggedIn ? 
              <ul class="navbar-nav">
                  <li class="nav-item"><a class="nav-link" onClick={this.logout}><span class="glyphicon glyphicon-user"></span>Logout</a></li>
              </ul> :
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="/signup"><span class="glyphicon glyphicon-user"></span>Sign Up</a></li>
                <li class="nav-item"><a class="nav-link" href="/login"><span class="glyphicon glyphicon-log-in"></span>Login</a></li>
              </ul> 
            }
          </div>
      </nav>
    )
  }
}
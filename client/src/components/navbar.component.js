import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default class NavBar extends Component {

  constructor(props) {
    super(props);
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
      }
    }).catch(error => {
        console.log(error)
        console.log('Logout error')
    })
  }

  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Recipe Brain</a>
            { this.props.isLoggedIn ? <div> Hey, {this.props.username} </div> : null }
            {
              this.props.loggedIn ? 
              <ul class="my-2 my-lg-0">
                  <li><a onClick={this.logout}><span class="glyphicon glyphicon-user"></span>Logout</a></li>
              </ul>:
              <ul class="my-2 my-lg-0">
                <li><a href="/signup"><span class="glyphicon glyphicon-user"></span>Sign Up</a></li>
                <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span>Login</a></li>
              </ul> 
            }
        </nav>
    )
  }
}
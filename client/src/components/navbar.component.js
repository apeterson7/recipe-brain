import React, { Component } from 'react';
import axios from 'axios';

export default class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Recipe Brain</a>
            
            <ul class="my-2 my-lg-0">
                <li><a href="/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </nav>
    )
  }
}
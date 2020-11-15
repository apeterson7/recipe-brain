import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { 
        username: '',
        email: '',
        password: '',
        countryCode: '',
        phoneNumber: ''
    };
  }

  componentDidMount() {
  }

  onChangeUserName(e) {
    this.setState({ username: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    let user = {
      username:    this.state.username,
      password:    this.state.password
    }

    console.log(user);
    axios.post('/api/sessions/login', user)
      .then(res => {
          console.log(res.data)
          window.location = '/';
        })
      .catch(err => console.log(err));
  }

  render() {
    return (
    <div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  
              type="text" 
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
          />
        </div>
        <div className="form-group"> 
          <label>Password: </label>
          <input  
              type="password" 
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
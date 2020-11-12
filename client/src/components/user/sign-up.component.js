import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {

    constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeCountryCode = this.onChangeCountryCode.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
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

  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  onChangeCountryCode(e) {
    this.setState({ countryCode: e.target.value })
  }

  onChangePhoneNumber(e) {
    this.setState({ phoneNumber: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    let user = {
      username:    this.state.username,
      email:       this.state.email,
      password:    this.state.password,
      countryCode: this.state.countryCode,
      phoneNumber: this.state.phoneNumber
    }

    console.log(user);
    axios.post('/api/users', user)
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
          <label>Email: </label>
          <input  
              type="text" 
              name="username"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
          />
        </div>
        <div className="form-group"> 
          <label>Password: </label>
          <input  
              type="text" 
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
          />
        </div>
        <div className="form-group"> 
          <label>Country Code: </label>
          <input  
              type="text" 
              name="username"
              className="form-control"
              value={this.state.countryCode}
              onChange={this.onChangeCountryCode}
          />
        </div>
        <div className="form-group"> 
          <label>Phone Number: </label>
          <input  
              type="text" 
              name="username"
              className="form-control"
              value={this.state.phoneNumber}
              onChange={this.onChangePhoneNumber}
          />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Recipe" className="btn btn-primary" />
        </div>
        
      </form>
    </div>
    )
  }
}
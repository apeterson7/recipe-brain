import React, { Component } from 'react';
import axios from 'axios';

export default class GlobalSearch extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { 
        name: ''
    };
  }

  onSubmit(e) {

    e.preventDefault();

    const recipe = {
      name: this.state.name,
      link: this.state.link,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions
    }

    console.log(recipe);

    axios.post('/api/recipes', recipe)
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
          {/* <label>Search: </label> */}
          <input  type="text" className="form-control" placeholder="Search"/>
        </div>
      </form>
    </div>
    )
  }
}
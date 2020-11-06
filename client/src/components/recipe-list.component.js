import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
  <tr>
    <td>{props.recipe.name}</td>
    <td>{props.recipe.link}</td>
    <td>{props.recipe.ingredients.length}</td>
    {/* <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td> */}
  </tr>
)

export default class RecipeeList extends Component {
  constructor(props) {
    super(props);

    // this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { recipes: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/recipe')
      .then(response => {
        this.setState({ recipes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

//   deleteExercise(id) {
//     axios.delete('http://localhost:5000/exercises/'+id)
//       .then(response => { console.log(response.data)});

//     this.setState({
//       exercises: this.state.exercises.filter(el => el._id !== id)
//     })
//   }

  recipeList() {
    return this.state.recipes.map(recipe => {
      return <Recipe recipe={recipe} key={recipe._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Recipes</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.recipeList() }
          </tbody>
        </table>
      </div>
    )
  }
}
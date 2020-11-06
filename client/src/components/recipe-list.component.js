import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
  <tr>
    <td>{props.recipe.name}</td>
    <td>{props.recipe.link}</td>
    <td>{props.recipe.ingredients.length}</td>
    <td>
      <Link to={"/recipes/"+props.recipe._id}>View</Link>
    </td>
  </tr>
)

export default class RecipeList extends Component {
  constructor(props) {
    super(props);

    // this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { recipes: []};
  }

  componentDidMount() {
    axios.get(`/api/recipes`)
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
        <Link to={"/add"}>Add</Link>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Recipe</th>
              <th>Link</th>
              <th>Ingredients</th>
              <th>View</th>
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
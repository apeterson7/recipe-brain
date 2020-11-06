import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <div>
        <h1>{props.recipe.name}</h1>
        <p>{props.recipe.link}</p>
        <ul>

        {props.recipe.ingredients ? props.recipe.ingredients.map(ingredient => {
            return (
                <li>{ingredient.name}</li>
            )
        }): null}
        </ul>
    </div>
)

export default class RecipeDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { recipe: {} };
  }

  componentDidMount() {
    axios.get('/api/recipes/'+this.props.match.params.id)
      .then(response => {
        this.setState({ recipe: response.data })
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

  render() {
    return (
      <div>
        <h3>Recipe</h3>
        <Recipe recipe={this.state.recipe} key={this.state.recipe._id}/>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GlobalSearch from './global-search.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Recipe = props => (
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.recipe.name} <a href={props.recipe.link} target="_blank"><FontAwesomeIcon icon={faLink} /></a></h5>
        <p class="card-text"> This recipe has {props.recipe.ingredients.length} ingredients. {props.recipe.time.total ? "Cook time is " +props.recipe.time.total: null }</p>
        <Link to={"/recipes/"+props.recipe._id}>Show Detail</Link>
      </div>
    </div>
  </div>
)

export default class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.deleteRecipe = this.deleteRecipe.bind(this)

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

  deleteRecipe(id) {
    axios.delete('/api/recipes/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      recipes: this.state.recipes.filter(el => el._id !== id)
    })
  }

  recipeList() {
    return this.state.recipes.map(recipe => {
      return <Recipe recipe={recipe} key={recipe._id} deleteRecipe={this.deleteRecipe}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Recipes  <Link to={"/add"} >Add</Link></h3>
        <GlobalSearch></GlobalSearch>
        { this.recipeList() }
      </div>
    )
  }
}
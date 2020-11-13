import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><a href={props.recipe.link}>{props.recipe.name}</a></h5>
      <p class="card-text"> This recipe has {props.recipe.ingredients.length} ingredients. {props.recipe.time.total ? "Cook time is " +props.recipe.time.total: null }</p>
      <Link to={"/recipes/"+props.recipe._id}>Show Detail</Link> 

      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </button>

      <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
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
        <h3>Recipes</h3>
        <Link to={"/add"} >Add</Link>
        { this.recipeList() }
        
      </div>
      
    )
  }
}
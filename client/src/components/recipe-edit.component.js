import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Accordion, Card, Button} from 'react-bootstrap'
import _ from 'lodash'

export default class RecipeDetail extends Component {
  constructor(props) {
    super(props);

    this.onChangeIngredient = this.onChangeIngredient.bind(this);
    this.onChangeInstruction = this.onChangeInstruction.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.submit = this.submit.bind(this);

    this.state = { 
      recipe: {},
      $push: [],
      $set: {}
    };
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

  onChangeIngredient(index, e, field) {
    let ingredient = this.state.recipe.ingredients[index];
    ingredient[field] = e.target.value;
    let $push = this.state.$push;
    $push.push(ingredient);
    this.setState({$push:$push});
  }

  onChangeInstruction(index, e) {
    let ingredient = this.state.recipe.ingredients[index];
    // ingredient[field] = e.target.value;
    let $push = this.state.$push;
    $push.push(ingredient);
    this.setState({$push:$push});
  }

  onChangeNote(e) {
    let $set = this.state.$set;
    $set.push({note: e.target.value});
    this.setState({$set:$set});
  }

  submit(){

    axios.put('/api/recipes', this.state.recipe)
      .then(res => {
        console.log(res.data)
        // window.location = '/';
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Recipe</h3>
        {/* <Recipe recipe={this.state.recipe} key={this.state.recipe._id}/> */}

        <h1>{this.state.recipe.name}</h1>
        <p>{this.state.recipe.link}</p>
        {_.times((this.state.recipe.rating), () => { return (<span class="fa fa-star"></span>)})} Rated {this.state.recipe.rating} Stars
        <br></br>

        {/* <img src={props.recipe.image} width="100%"></img> */}
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Ingredients</h5>
            {this.state.recipe.ingredients ? this.state.recipe.ingredients.map((ingredient, index) => {
              return (
                <form class="form-inline">
                  <label for="email">{index+1} Name</label>
                  <input type="text" class="form-control" placeholder={ingredient.name}  onChange={(e)=> {this.onChangeIngredient(index, e, 'name')}}></input>
                  <label for="pwd">Quantity</label>
                  <input type="text" class="form-control" placeholder={ingredient.quantity} onChange={(e)=> {this.onChangeIngredient(index, e, 'quantity')}}></input>
                  <label for="pwd">Unit</label>
                  <input type="text" class="form-control" placeholder={ingredient.unit} onChange={(e)=> {this.onChangeIngredient(index, e, 'unit')}}></input>
                </form>)
              }) :  <p>No Ingredients Found</p>
            }
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Instructions</h5>
            {this.state.recipe.instructions ? this.state.recipe.instructions.map((instruction, index) => {
              return (
                <div class="form-group" >
                  <label >Instruction {index+1}</label>
                  <textarea class="form-control" value={instruction} id={"instruction"+index} onChange={(e) => {this.onChangeInstruction(index, e)}}/>
                </div>
                )
              }) : <p>No instructions found!</p>}
          </div>
        </div>
        
        <div class="form-group" >
          <label>Notes</label>
          <textarea class="form-control" value={this.state.note} id="notes" onChange={this.onChangeNote}/>
        </div>

        <button class="btn btn-primary" onClick={this.submit}>Submit</button>
      </div>
    )
  }
}
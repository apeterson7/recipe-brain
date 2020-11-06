import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
var numQty = require("numeric-quantity");

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

export default class RecipeAdd extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { 
        name: '',
        link: '',
        ingredients: [],
        instructions: [],
        timeActive: '',
        timeCook: '',
        timeInactive: '',
        timePrep: '',
        timeReady: '',
        timeTotal: '',

        scrapedRecipe: {},
        scrapedImgLink: ''
    };
  }

  componentDidMount() {
  }

  onChangeName(e) {
    this.setState({
        name: e.target.value
    })
  }

  onChangeLink(e) {
    this.setState({link: e.target.value})
    this.getRecipeFromLink(e.target.value)
  }

  setIngredient() {

  }

  checkAmount(amt){

  }

  parseIngredient(ingredientStr){
    let tokens = ingredientStr.split(' ');
    let quantity = (tokens.shift());
    try{
        quantity = numQty(quantity)
        if(tokens.length < 2){
            let name = tokens.shift();
            return {name: name, quantity: quantity, unit:null}
        }else{
            let unit = tokens.shift();
            let name = tokens.join(' ');
            return {name: name, quantity: quantity, unit:unit}
        }
    }catch{
        //If error, save all text as name
        tokens.unshift(quantity);
        return {name: tokens.join(' '), quantity: null, unit: null}
    }
  }

  getRecipeFromLink(link) {
    axios.post('/api/recipes/scrape', {link: link})
    .then(res => {
        console.log(res.data)
     
        let parsedIngredients = res.data.ingredients.map(ingredient => {
            return this.parseIngredient(ingredient);
        })
        console.log(parsedIngredients);

        this.setState({
            name: res.data.name,
            imageSrcLink: res.data.image,
            ingredients: parsedIngredients,
            instructions: res.data.instructions
        })
    });

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
      .then(res => console.log(res.data));

    this.setState({
      name: ''
    })

  }

  render() {
    return (
    <div>
      <h3>Add New Recipe</h3>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Link: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.link}
              onChange={this.onChangeLink}
              />
        </div>
        {this.state.imageSrcLink ? <img height="300px" width="300px" src={this.state.imageSrcLink}></img> : null }
        <div className="form-group"> 
          <label>Recipe </label>
          <input ref="nameInput"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}>
          </input>
        </div>

        {this.state.ingredients.length? "Ingredients:":null}
        <ul>
        {this.state.ingredients.map(ingredient => {
            return (
            <li>
                {ingredient.name}, {ingredient.quantity}, {ingredient.unit}
            </li>)
        })}
        </ul>

        
        {this.state.instructions.length? "Instructions:":null}
        <ul>
        {this.state.instructions.map(instruction => {
            return (
            <li>
                {instruction}
            </li>
            )
        })}
        </ul>


        <div className="form-group">
          <input type="submit" value="Create Recipe" className="btn btn-primary" />
        </div>
        
      </form>
    </div>
    )
  }
}
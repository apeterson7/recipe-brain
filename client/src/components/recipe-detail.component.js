import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Accordion, Card, Button} from 'react-bootstrap'
import _ from 'lodash'


const Recipe = props => (
    <div>
        <h1>{props.recipe.name}</h1>
        <p>{props.recipe.link}</p>
        {_.times((props.recipe.rating), () => { return (<span class="fa fa-star"></span>)})} Rated {props.recipe.rating} Stars
        <br></br>

        <img src={props.recipe.image} width="100%"></img>

        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Ingredients
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>

              <table class="table">
                <tbody>
                  {props.recipe.ingredients ? props.recipe.ingredients.map(ingredient => {
                        return (
                          <tr>
                            <td>{ingredient.quantity} {ingredient.unit}</td>
                            <td>{ingredient.name}</td>
                          </tr>
                        )
                    }) :
                    <tr><td>No Ingredients Found</td></tr>
                  }
                </tbody>
              </table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Instructions
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ol>
                  {props.recipe.instructions ? props.recipe.instructions.map(instruction => {
                        return (
                            <li>{instruction}</li>
                        )
                    }): <li>No instructions found!</li>}
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <p>
          {props.recipe.notes}
        </p>
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

  render() {
    return (
      <div>
        <h3>Recipe</h3>
        <Recipe recipe={this.state.recipe} key={this.state.recipe._id}/>
      </div>
    )
  }
}
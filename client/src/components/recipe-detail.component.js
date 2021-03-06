import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Accordion, Card, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import _ from 'lodash'


const Recipe = props => (
    <div class="row">
      <div class="col-6">
        <h1>{props.recipe.name} <a href={props.recipe.link} target="_blank"><FontAwesomeIcon icon={faLink} /></a></h1>
        {_.times((props.recipe.rating), () => { return (<span class="fa fa-star"></span>)})} Rated {props.recipe.rating} Stars
        <br></br>
        <img src={props.recipe.image} width="100%"></img>
        <button class="btn btn-primary" onClick={props.notify}>Text Me Ingredients!</button>
      </div>
      <div class="col-6">
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
    </div>
)

export default class RecipeDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { recipe: {} };
    this.notify = this.notify.bind(this);
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

  notify() {
    axios.post('/api/recipes/text', {recipe: this.state.recipe})
    .then(response => {
      console.log(response.body)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <Recipe recipe={this.state.recipe} key={this.state.recipe._id} notify={this.notify}/>
      </div>
    )
  }
}
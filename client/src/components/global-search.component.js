import React, { Component } from 'react';
import axios from 'axios';
import AsyncSelect from 'react-select/async';
import history from '../common/history';
import styled from 'styled-components';

const SearchStyle = styled.div`
  margin-bottom: 10px
`;

const loadOptions = (inputValue, callback) => {
  axios.post('api/recipes/find', {find: inputValue})
  .then(res => {
    console.log(res.data);
    callback(res.data.map(datum => {
      return {
        value: datum.name,
        label: datum.name,
        id: datum.id
      }
    }));
  })
};

export default class WithCallbacks extends Component {
  state = { inputValue: '' };
  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };

  handleSelect = (selectedValue) => {
    console.log(selectedValue);
    window.location=`/recipes/${selectedValue.id}`;

  }
  render() {
    return (
      <SearchStyle>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
          onChange={this.handleSelect}
        />
      </SearchStyle>
    );
  }
}
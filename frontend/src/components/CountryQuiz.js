import React, { Component } from 'react';
import axios from 'axios';

class CountryQuiz extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      capital: '',
      currency: '',
      region: ''
    };
  }

  componentDidMount = () => {
    axios.get('countryquiz').then(response => {
      console.log(response);
      this.setState({
        name: response.data.name,
        capital: response.data.capital,
        currency: response.data.currency,
        region: response.data.region
      });
    });
  };

  render() {
    return (
      <form className='centered'>
        <label htmlFor='inputCapital'>
          What is the capital of {this.state.name}? {this.state.capital}
        </label>
        <input
          className='inputCapital'
          type='text'
          id='inputCapital'
          placeholder='Enter Capital'
        />
        <button>Submit</button>
        <br></br>
        <label htmlFor='inputCurrency'>
          What is the currency of {this.state.name}? {this.state.currency}
        </label>
        <input
          className='inputCurrency'
          type='text'
          id='inputCurrency'
          placeholder='Enter Currency'
        />
        <button>Submit</button>
        <br></br>
        <label htmlFor='inputContinent'>
          Which continent does {this.state.name} fall in? {this.state.region}
        </label>
        <input
          className='inputContinent'
          type='text'
          id='inputContinent'
          placeholder='Enter Continent'
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default CountryQuiz;

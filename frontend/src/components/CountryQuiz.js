import React, { Component } from 'react';
import axios from 'axios';

class CountryQuiz extends Component {
  constructor(props) {
    super(props);
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

  inputCapital = event => {
    this.setState({ capital: event.target.value });
  };

  inputCurrency = event => {
    this.setState({ currency: event.target.value });
  };

  inputContinent = event => {
    this.setState({ region: event.target.value });
  };

  submitCapital = event => {
    event.preventDefault();
    const { capital } = this.state;
    const matches = capital === event.target.value;
    matches
      ? alert('This is the correct answer. Well done!!')
      : alert(`Incorrect answer. The correct answer is ${this.state.capital}`);
  };

  submitCurrency = event => {
    event.preventDefault();
    const { currency } = this.state;
    const matches = currency === event.target.value;
    matches
      ? alert('This is the correct answer. Well done!!')
      : alert(`Incorrect answer. The correct answer is ${this.state.currency}`);
  };

  submitContinent = event => {
    event.preventDefault();
    const { region } = this.state;
    const matches = region === event.target.value;
    matches
      ? alert('This is the correct answer. Well done!!')
      : alert(`Incorrect answer. The correct answer is ${this.state.region}`);
  };

  render() {
    return (
      <form>
        <form className='centered' onSubmit={this.submitCapital}>
          <label htmlFor='inputCapital'>
            What is the capital of {this.state.name}? {this.state.capital}
          </label>
          <input
            className='inputCapital'
            type='text'
            placeholder='Enter Capital'
            onChange={this.inputCapital}
          />
          <button type='submit'>Submit</button>
        </form>

        <br></br>
        <form className='centered' onSubmit={this.submitCurrency}>
          <label htmlFor='inputCurrency'>
            What is the currency of {this.state.name}? {this.state.currency}
          </label>
          <input
            className='inputCurrency'
            type='text'
            placeholder='Enter Currency'
            onChange={this.inputCurrency}
          />
          <button>Submit</button>
        </form>
        <br></br>

        <form className='centered' onSubmit={this.submitContinent}>
          <label htmlFor='inputContinent'>
            Which continent does {this.state.name} fall in? {this.state.region}
          </label>
          <input
            className='inputContinent'
            type='text'
            placeholder='Enter Continent'
            onChange={this.inputContinent}
          />
          <button>Submit</button>
        </form>
      </form>
    );
  }
}

export default CountryQuiz;

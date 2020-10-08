import React, { Component } from 'react';
import axios from 'axios';

class CountryQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      capital: '',
      currency: '',
      region: '',
      inputCapital: '',
      inputCurrency: '',
      inputContinent: ''
    };
  }

  componentDidMount = () => {
    axios
      .get(`countryquiz?countryName=${this.props.countryName}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          capital: response.data.capital,
          currency: response.data.currency,
          region: response.data.region
        });
      });
  };

  inputCapital = event => {
    this.setState({ ...this.state, inputCapital: event.target.value });
  };

  inputCurrency = event => {
    this.setState({ ...this.state, inputCurrency: event.target.value });
  };

  inputContinent = event => {
    this.setState({ ...this.state, inputContinent: event.target.value });
  };

  submitCapital = event => {
    event.preventDefault();
    const { capital, inputCapital } = this.state;
    if (capital.toLowerCase() === inputCapital.toLowerCase()) {
      alert('This is the correct answer. Well done!!');
    } else {
      alert(`Incorrect answer. The correct answer is ${this.state.capital}`);
    }
  };

  submitCurrency = event => {
    event.preventDefault();
    const { currency, inputCurrency } = this.state;
    if (currency.toLowerCase() === inputCurrency.toLowerCase()) {
      alert('This is the correct answer. Well done!!');
    } else {
      alert(`Incorrect answer. The correct answer is ${this.state.currency}`);
    }
  };

  submitContinent = event => {
    event.preventDefault();
    const { region, inputContinent } = this.state;
    if (region.toLowerCase() === inputContinent.toLowerCase()) {
      alert('This is the correct answer. Well done!!');
    } else {
      alert(`Incorrect answer. The correct answer is ${this.state.region}`);
    }
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      inputCapital: '',
      inputCurrency: '',
      inputContinent: ''
    });
  };

  render() {
    return (
      <div className='centered'>
        <form className='centered' onSubmit={this.submitCapital}>
          <label htmlFor='inputCapital'>
            What is the capital of {this.props.countryName}?
          </label>
          <input
            className='inputCapital'
            type='text'
            placeholder='Enter Capital'
            value={this.state.inputCapital}
            onChange={this.inputCapital}
          />
          <button type='submit'>Submit</button>
        </form>

        <form className='centered' onSubmit={this.submitCurrency}>
          <label htmlFor='inputCurrency'>
            What is the currency of {this.props.countryName}?
          </label>
          <input
            className='inputCurrency'
            type='text'
            placeholder='Enter Currency'
            value={this.state.inputCurrency}
            onChange={this.inputCurrency}
          />
          <button>Submit</button>
        </form>

        <form className='centered' onSubmit={this.submitContinent}>
          <label htmlFor='inputContinent'>
            Which continent does {this.props.countryName} fall in?
          </label>
          <input
            className='inputContinent'
            type='text'
            placeholder='Enter Continent'
            value={this.state.inputContinent}
            onChange={this.inputContinent}
          />
          <button>Submit</button>
        </form>

        <br></br>
        <button onClick={this.handleClick}>Play Again!!</button>
      </div>
    );
  }
}

export default CountryQuiz;

import React, { Component } from 'react';
import axios from 'axios';

class CountryQuiz extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
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
        // console.log(response);
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

    // console.log('capital' + capital);
    // console.log('inputCapital' + inputCapital);

    if (capital === inputCapital) {
      alert('This is the correct answer. Well done!!');
    } else {
      alert(`Incorrect answer. The correct answer is ${this.state.capital}`);
    }
  };

  submitCurrency = event => {
    event.preventDefault();
    const { currency, inputCurrency } = this.state;

    // console.log('currency' + currency);
    // console.log('inputCurrency' + inputCurrency);

    if (currency === inputCurrency) {
      alert('This is the correct answer. Well done!!');
    } else {
      alert(`Incorrect answer. The correct answer is ${this.state.currency}`);
    }
  };

  submitContinent = event => {
    event.preventDefault();
    const { region, inputContinent } = this.state;

    // console.log('region' + region);
    // console.log('inputContinent' + inputContinent);

    if (region === inputContinent) {
      alert('This is the correct answer. Well done!!');
    } else {
      alert(`Incorrect answer. The correct answer is ${this.state.region}`);
    }
  };

  render() {
    return (
      <div>
        <form className='centered' onSubmit={this.submitCapital}>
          <label htmlFor='inputCapital'>
            What is the capital of {this.props.countryName}?
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
            What is the currency of {this.props.countryName}?
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
            Which continent does {this.props.countryName} fall in?
          </label>
          <input
            className='inputContinent'
            type='text'
            placeholder='Enter Continent'
            onChange={this.inputContinent}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CountryQuiz;

import React, { Component } from 'react';
import axios from 'axios';

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      capital: '',
      currency: '',
      region: '',
      flag: '',
      population: ''
    };
  }

  componentDidMount = () => {
    axios
      .get(`countryquiz?countryName=${this.props.countryName}`)
      .then(response => {
        // console.log(response);
        this.setState({
          capital: response.data.capital,
          name: response.data.name,
          flag: response.data.capital,
          currency: response.data.currency,
          region: response.data.region,
          population: response.data.population
        });
      });
  };

  render() {
    return <form className='centered'>Country Details</form>;
  }
}

export default CountryDetails;

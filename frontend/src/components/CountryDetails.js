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
      population: '',
      language: ''
    };
  }

  componentDidMount = () => {
    axios
      .get(`countrydetails?countryName=${this.props.countryName}`)
      .then(response => {
        this.setState({
          capital: response.data.capital,
          name: response.data.name,
          flag: response.data.flag,
          currency: response.data.currency,
          region: response.data.region,
          population: response.data.population,
          language: response.data.language
        });
      });
  };

  render() {
    return (
      <div className='cntryinfo'>
        <div className='flag'>
          <img src={this.state.flag} alt='countryflag'></img>
        </div>
        <div className='detail-elemnt'>
          <div className='details'>
            <div className='p-head'>
              The <b>capital</b> of {this.state.name} is :
            </div>
            <div className='p-body'>{this.state.capital}</div>
          </div>
          <br></br>
          <div className='details'>
            <div className='p-head'>
              The <b>currency</b> of {this.state.name} is :
            </div>
            <div className='p-body'>{this.state.currency}</div>
          </div>
          <br></br>
          <div className='details'>
            <div className='p-head'>
              The <b>region</b> of {this.state.name} is :
            </div>
            <div className='p-body'>{this.state.region}</div>
          </div>
          <br></br>
          <div className='details'>
            <div className='p-head'>
              The <b>population</b> of {this.state.name} is :
            </div>
            <div className='p-body'>{this.state.population}</div>
          </div>
          <br></br>
          <div className='details'>
            <div className='p-head'>
              The main <b>language</b> of {this.state.name} is :
            </div>
            <br></br>
            <div className='p-body'>{this.state.language}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetails;

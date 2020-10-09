import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountryQuiz from './components/CountryQuiz';
import './index.scss';
import logo from './images/trivia-logo.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countryName: ''
    };
  }

  handleChange = event => {
    this.setState({ countryName: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      countryName: ''
    });
  };

  render() {
    return (
      <Router>
        <header>
          <img src={logo} alt='Logo for Country Trivia' />
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <form className='centered'>
                <label htmlFor='inputCountry'>
                  Enter the name of any Country in this world
                </label>
                <br></br>
                <input
                  className='inputCountry'
                  type='text'
                  id='inputCountry'
                  required
                  placeholder='Enter Country Name'
                  value={this.state.countryName}
                  onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Clear</button>
                <br></br>
                <button>
                  <Link to='/countrydetails'>Learn More!!</Link>
                </button>
                <button>
                  <Link to='/countryquiz'>Play Quiz!!</Link>
                </button>
              </form>
            </Route>

            <Route path='/countrydetails'>
              <CountryDetails countryName={this.state.countryName} />
            </Route>

            <Route exact path='/countryquiz'>
              <CountryQuiz countryName={this.state.countryName} />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;

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
    console.log(this.state);
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
                  placeholder='Enter Country Name'
                  value={this.state.countryName}
                  onChange={this.handleChange}
                />
                <br></br>
                <br></br>
                <button>
                  <Link to='/countrydetails'>Display Country Details</Link>
                </button>
                <button>
                  <Link to='/countryquiz'>Play Country Quiz</Link>
                </button>
              </form>
            </Route>

            <Route path='/countrydetails'>
              <CountryDetails />
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

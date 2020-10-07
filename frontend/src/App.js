import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
// import CountryDetails from './components/CountryDetails';
import CountryQuiz from './components/CountryQuiz';
import './index.scss';
import logo from './images/trivia-logo.png';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <img src={logo} alt='Logo for Country Trivia' />
        </header>
        <main>
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
                placeholder='Enter Country Name'
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

          {/* <Route path='/countrydetails'>
            <CountryDetails />
          </Route> */}

          <Route path='/countryquiz'>
            <CountryQuiz />
          </Route>
        </main>
      </div>
    );
  }
}

export default App;

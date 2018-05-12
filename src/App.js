import React, { Component } from 'react';
import './App.css';
import TodaysWeather from './TodaysWeather';
import Forecast3H from './Forecast3H';
import Forecast5D from './Forecast5D';
import LongForecast from './LongForecast';

class App extends Component {
  state = {
    position: {},
    temperature: 'C°',
    loaded: false,
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getTodaysWeather(lat, lng) {
    return new Promise((resolve, reject) => {
      fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID=5a2357c5e034972f99a706acc29ebdda')
      //fetch('http://localhost:3000/fixtures/openweathermap.weather.json')
      .then((resp) => resp.json())
      .then((data) => {
        resolve({ openWeatherMapWeather: data });
      })
    });

  }

  get3HourAnd5DaysForecast(lat, lng) {
    return new Promise((resolve, reject) => {
      fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lng+'&APPID=5a2357c5e034972f99a706acc29ebdda')
      //fetch('http://localhost:3000/fixtures/openweathermap.forecast.json')
      .then((resp) => resp.json())
      .then((data) => {
        resolve({ openWeatherMapForecast: data });
      })
    });
  }

  get10DaysForecast(lat, lng) {
    return new Promise((resolve, reject) => {
      fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/'+lng+'/lat/'+lat+'/data.json')
      //fetch('http://localhost:3000/fixtures/smhi.forecast.json')
      .then((resp) => resp.json())
      .then((data) => {
        resolve({ smhiForecast: data });
      })
    });
  }

  handleFarenheitChange = (event) => {
    this.setState({ temperature: 'F°' });
  }

  handleCelciusChange = (event) => {
    this.setState({ temperature: 'C°' });
  }

  componentWillMount() {
    this.getLocation()
    .then((position) => {
      this.setState({
        position: position
      })

      return position;
    })
    .then((position) => {
      let { latitude, longitude } = position.coords;

      latitude = latitude.toFixed(4);
      longitude = longitude.toFixed(4);

      Promise.all([
        this.getTodaysWeather(latitude, longitude),
        this.get3HourAnd5DaysForecast(latitude, longitude),
        this.get10DaysForecast(latitude, longitude)
      ]).then((data) => {
        const combinedData = Object.assign({}, ...data);

        this.setState({
          ...{ loaded: true },
          ...combinedData,
        });
      })
    });
  }

  render() {
    const { loaded } = this.state

    if (!loaded) {
      return (
        <img className="loader" src="ajax-loader.gif" />
      )
    }

    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Vädret</h1>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-info">
                <input 
                  type="radio" 
                  name="options" 
                  id="option1" 
                  autoComplete="off" 
                  onChange={this.handleCelciusChange} 
                /> Celcius
              </label>
              <label className="btn btn-info">
                <input 
                  type="radio" 
                  name="options" 
                  id="option2" 
                  autoComplete="off" 
                  onChange={this.handleFarenheitChange} 
                /> Fahrenheit
              </label>
            </div>
          </div>
        </div>
        {this.state.openWeatherMapWeather &&
          <TodaysWeather 
            position={this.state.position} 
            weather={this.state.openWeatherMapWeather} 
            tempUnit={this.state.temperature} 
          />
        }
        {this.state.openWeatherMapForecast &&
          <Forecast3H 
            weather={this.state.openWeatherMapForecast} 
            tempUnit={this.state.temperature} 
          />
        }
        {this.state.openWeatherMapForecast &&
          <Forecast5D 
            weather={this.state.openWeatherMapForecast} 
            tempUnit={this.state.temperature} 
          />
        }
        {this.state.smhiForecast &&
          <LongForecast 
            weather={this.state.smhiForecast} 
            tempUnit={this.state.temperature} 
          />
        }
      </div>
    );
  }
}

export default App;

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
    // currentDate: new Date().today()
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getTodaysWeather(lat, lng) {
    return new Promise((resolve, reject) => {
      //fetch('https://api.openweathermap.org/data/2.5/weather?lat=-0.13&lon=51.51&APPID=5a2357c5e034972f99a706acc29ebdda')
      fetch('http://localhost:3000/fixtures/openweathermap.weather.json')
      .then((resp) => resp.json())
      .then((data) => {
        resolve({ openWeatherMapWeather: data });
      })
    });

  }

  get3HourAnd5DaysForecast(lat, lng) {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/fixtures/openweathermap.forecast.json')
      .then((resp) => resp.json())
      .then((data) => {
        resolve({ openWeatherMapForecast: data });
      })
    });
  }

  get10DaysForecast(lat, lng) {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/fixtures/smhi.forecast.json')
      .then((resp) => resp.json())
      .then((data) => {
        resolve({ smhiForecast: data });
      })
    });
  }

  handleFarenheitChange(event) {
    this.setState({temperature: 'F°'});
    console.log(this.state.temperature);
  }

  handleCelciusChange(event) {
    this.setState({temperature: 'C°'});
    console.log(this.state.temperature);
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
      Promise.all([
        this.getTodaysWeather(position.coords.latitude, position.coords.longitude),
        this.get3HourAnd5DaysForecast(position.coords.latitude, position.coords.longitude),
        this.get10DaysForecast(position.coords.latitude, position.coords.longitude)
      ]).then((data) => {
        const combinedData = Object.assign({}, ...data);
        this.setState(combinedData);
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Vädret</h1>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-info">
                <input type="radio" name="options" id="option1" autoComplete="off" onChange={this.handleCelciusChange.bind(this)} /> Celcius
              </label>
              <label className="btn btn-info">
                <input type="radio" name="options" id="option2" autoComplete="off" onChange={this.handleFarenheitChange.bind(this)} /> Fahrenheit
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.openWeatherMapWeather &&
            <TodaysWeather position={this.state.position} weather={this.state.openWeatherMapWeather} tempUnit={this.state.temperature} />
          }

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Karta</h3>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>

        {this.state.openWeatherMapForecast &&
          <Forecast3H position={this.state.position} weather={this.state.openWeatherMapForecast} tempUnit={this.state.temperature} />
        }
        {this.state.openWeatherMapForecast &&
          <Forecast5D position={this.state.position} weather={this.state.openWeatherMapForecast} tempUnit={this.state.temperature} />
        }
        {this.state.smhiForecast &&
          <LongForecast position={this.state.position} weather={this.state.smhiForecast} tempUnit={this.state.temperature} />
        }


      </div>


    );
  }
}

export default App;

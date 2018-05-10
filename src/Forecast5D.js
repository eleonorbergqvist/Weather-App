import React, { Component } from 'react';
import temperatureConverter from './Utils/temperatureConverter';
import timeConverter from './Utils/timeConverter';

class Forecast5D extends Component {
  static defaultProps = {
    position: null,
    // currentDate: null,
  }

  componentWillMount() {
   // console.log(this.props.weather);
    
  }

  render() {

    return (
      <div>
        <h3>5-dagars prognos</h3>
        <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">{this.props.weather.list[0].dt_txt.substr(0, 10)}</th>
            <th scope="col">{this.props.weather.list[8].dt_txt.substr(0, 10)}</th>
            <th scope="col">{this.props.weather.list[16].dt_txt.substr(0, 10)}</th>
            <th scope="col">{this.props.weather.list[24].dt_txt.substr(0, 10)}</th>
            <th scope="col">{this.props.weather.list[32].dt_txt.substr(0, 10)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td><img src={"http://openweathermap.org/img/w/" + this.props.weather.list[0].weather[0].icon + ".png"} /></td>
            <td><img src={"http://openweathermap.org/img/w/" + this.props.weather.list[8].weather[0].icon + ".png"} /></td>
            <td><img src={"http://openweathermap.org/img/w/" + this.props.weather.list[16].weather[0].icon + ".png"} /></td>
            <td><img src={"http://openweathermap.org/img/w/" + this.props.weather.list[24].weather[0].icon + ".png"} /></td>
            <td><img src={"http://openweathermap.org/img/w/" + this.props.weather.list[32].weather[0].icon + ".png"} /></td>
          </tr>
          <tr>
            <th scope="row">Temperatur</th>
            <td>{Math.round(temperatureConverter(this.props.weather.list[0].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
            <td>{Math.round(temperatureConverter(this.props.weather.list[8].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
            <td>{Math.round(temperatureConverter(this.props.weather.list[16].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
            <td>{Math.round(temperatureConverter(this.props.weather.list[24].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
            <td>{Math.round(temperatureConverter(this.props.weather.list[32].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
          </tr>
          <tr>
            <th scope="row">Beskrivning</th>
            <td>{this.props.weather.list[0].weather[0].main}</td>
            <td>{this.props.weather.list[8].weather[0].main}</td>
            <td>{this.props.weather.list[16].weather[0].main}</td>
            <td>{this.props.weather.list[24].weather[0].main}</td>
            <td>{this.props.weather.list[32].weather[0].main}</td>
          </tr>
          <tr>
            <th scope="row">Luftfuktighet</th>
            <td>{this.props.weather.list[0].main.humidity} %</td>
            <td>{this.props.weather.list[8].main.humidity} %</td>
            <td>{this.props.weather.list[16].main.humidity} %</td>
            <td>{this.props.weather.list[24].main.humidity} %</td>
            <td>{this.props.weather.list[32].main.humidity} %</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}

export default Forecast5D;
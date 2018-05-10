import React, { Component } from 'react';
import temperatureConverter from './Utils/temperatureConverter';
import timeConverter from './Utils/timeConverter';

class LongForecast extends Component {
  static defaultProps = {
    weather: null,
  }

  dateTimeIsHour12 = (x) => {
    let date = new Date(x.validTime)
    date = new Date(date.getTime()-(2*60*60*1000))

    return date.getHours() === 12
  }

  celsiusToKelvin = (celsius) => celsius + 273.15

  render() {
    const { weather, tempUnit } = this.props
    let weatherTimes = weather.timeSeries.filter(this.dateTimeIsHour12);
    
    weatherTimes = weatherTimes.map((x) => {
      const celsius = x.parameters[11].values[0];
      x.kelvin = this.celsiusToKelvin(celsius)
      return x;
    })

    weatherTimes = weatherTimes.slice(0, 7);

    return (
      <div>
        <h3>Veckoöversikt</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              {weatherTimes.map((x, index) => {
                return (
                  <th key={index} scope="col">{x.validTime.substr(0, 10)}</th>
                )
              })}
            </tr>
            <tr>
              <th scope="col"></th>
              {weatherTimes.map((x, index) => {
                return (
                  <th key={index} scope="col">{x.validTime.substr(11, 5)}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              {weatherTimes.map((x, index) => {
                return (
                  <td key={index}><img src={"../icons/" + x.parameters[18].values[0] + ".png"} /></td>
                )
              })}
            </tr>
            <tr>
              <th scope="row">Temperatur</th>
              {weatherTimes.map((x, index) => {
                return (
                  <td key={index}>{Math.round(temperatureConverter(x.kelvin, tempUnit))} {tempUnit}</td>
                )
              })}
            </tr>
            <tr>
              <th scope="row">Luftfuktighet</th>
              {weatherTimes.map((x, index) => {
                return (
                  <td key={index}>{x.parameters[15].values[0]} %</td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LongForecast;
import React, { Component } from 'react';
import temperatureConverter from './Utils/temperatureConverter';
import timeConverter from './Utils/timeConverter';

class Forecast3H extends Component {
  static defaultProps = {
    weather: null,
    tempUnit: null,
  }

  render() {
    const { weather, tempUnit } = this.props
    let forcasts = this.props.weather.list
    forcasts = forcasts.slice(0, 8)

    return (
      <div>
        <h3>3-timmars väder</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              {forcasts.map((forcast, index) => {
                return (
                  <th scope="col" key={index}>{timeConverter(forcast.dt)}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Temperatur</th>
              {forcasts.map((forcast, index) => {
                return (
                  <td key={index}>{Math.round(temperatureConverter(forcast.main.temp, tempUnit))} {tempUnit}</td>
                )
              })}
            </tr>
            <tr>
              <th scope="row">Luftfuktighet</th>
              {forcasts.map((forcast, index) => {
                return (
                  <td key={index}>{forcast.main.humidity} %</td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Forecast3H;
import React, { Component } from 'react';
import temperatureConverter from './Utils/temperatureConverter';

class Forecast5D extends Component {
  static defaultProps = {
    tempUnit: null,
    weather: null,
  }

  render() {
    const { tempUnit } = this.props
    let forcasts = this.props.weather.list.filter((x, index) => {
      return !(index%8);
    })

    return (
      <div>
        <h3>5-dagars prognos</h3>
        <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            {forcasts.map((forcast, index) => {
              return (
                <th scope="col" key={index}>{forcast.dt_txt.substr(0, 10)}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            {forcasts.map((forcast, index) => {
              return (
                <td key={index}><img alt={forcast.weather[0].description} src={"https://openweathermap.org/img/w/" + forcast.weather[0].icon + ".png"} /></td>
              )
            })}
          </tr>
          <tr>
            <th scope="row">Temperatur</th>
            {forcasts.map((forcast, index) => {
              return (
                <td key={index}>{Math.round(temperatureConverter(forcast.main.temp, tempUnit))} {tempUnit}</td>
              )
            })}
          </tr>
          <tr>
            <th scope="row">Beskrivning</th>
            {forcasts.map((forcast, index) => {
              return (
                <td key={index}>{forcast.weather[0].main}</td>
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

export default Forecast5D;
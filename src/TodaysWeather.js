import React, { Component } from 'react';
import temperatureConverter from './Utils/temperatureConverter';
import timeConverter from './Utils/timeConverter';

class TodaysWeather extends Component {
  static defaultProps = {
    weather: null,
    tempUnit: null,
    position: null,
  }

  render() {
    const { latitude, longitude } = this.props.position.coords;
    const { weather, tempUnit } = this.props;
    let temperature = temperatureConverter(weather.main.temp, tempUnit);
    temperature = Math.round(temperature);

    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Vädret idag</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Temperatur</th>
                    <td>{temperature} {tempUnit}</td>
                  </tr>
                  <tr>
                    <th scope="row">Vindstyrka</th>
                    <td>{weather.wind.speed} m/s</td>
                  </tr>
                  <tr>
                    <th scope="row">Luftfuktighet</th>
                    <td>{weather.main.humidity} %</td>
                  </tr>
                  <tr>
                    <th scope="row">Soluppgång</th>
                    <td>{timeConverter(weather.sys.sunrise)}</td>
                  </tr>
                  <tr>
                    <th scope="row">Solnedgång</th>
                    <td>{timeConverter(weather.sys.sunset)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Din position</h3>
              <p className="card-text">Latitude: {latitude}</p>
              <p className="card-text">Longitude: {longitude}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodaysWeather;

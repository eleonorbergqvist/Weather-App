import React, { Component } from 'react';
import temperatureConverter from './Utils/temperatureConverter';
import timeConverter from './Utils/timeConverter';

class TodaysWeather extends Component {
  static defaultProps = {
    position: null,
    // currentDate: null,
  }

  componentWillMount() {
    // console.log('TodaysWeather');
    
  }

  render() {
   console.log(this.props.weather);

    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Vädret idag</h3>
            <p className="card-text">Longitude: Latitude:</p>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Temperatur</th>
                  <td>{Math.round(temperatureConverter(this.props.weather.main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
                </tr>
                <tr>
                  <th scope="row">Vindstyrka</th>
                  <td>{this.props.weather.wind.speed} m/s</td>
                </tr>
                <tr>
                  <th scope="row">Luftfuktighet</th>
                  <td>{this.props.weather.main.humidity} %</td>
                </tr>
                <tr>
                  <th scope="row">Soluppgång</th>
                  <td>{timeConverter(this.props.weather.sys.sunrise)}</td>
                </tr>
                <tr>
                  <th scope="row">Solnedgång</th>
                  <td>{timeConverter(this.props.weather.sys.sunset)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TodaysWeather;

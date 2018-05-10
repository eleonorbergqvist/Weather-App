import React, { Component } from 'react';
import temperatureConverter from './Utils/temperatureConverter';
import timeConverter from './Utils/timeConverter';

class Forecast3H extends Component {
  static defaultProps = {
    position: null,
    // currentDate: null,
  }

  componentWillMount() {
    // console.log('TodaysWeather');
    
  }

  render() {
    return (
      <div>
        <h3>3-timmars väder</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">{timeConverter(this.props.weather.list[0].dt)}</th>
              <th scope="col">{timeConverter(this.props.weather.list[1].dt)}</th>
              <th scope="col">{timeConverter(this.props.weather.list[2].dt)}</th>
              <th scope="col">{timeConverter(this.props.weather.list[3].dt)}</th>
              <th scope="col">{timeConverter(this.props.weather.list[4].dt)}</th>
              <th scope="col">{timeConverter(this.props.weather.list[5].dt)}</th>
              <th scope="col">{timeConverter(this.props.weather.list[6].dt)}</th>
              <th scope="col">{timeConverter(this.props.weather.list[7].dt)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Temperatur</th>
              <td>{Math.round(temperatureConverter(this.props.weather.list[0].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(temperatureConverter(this.props.weather.list[1].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(temperatureConverter(this.props.weather.list[2].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(temperatureConverter(this.props.weather.list[3].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(temperatureConverter(this.props.weather.list[4].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(temperatureConverter(this.props.weather.list[5].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(temperatureConverter(this.props.weather.list[6].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(temperatureConverter(this.props.weather.list[7].main.temp, this.props.tempUnit))} {this.props.tempUnit}</td>
            </tr>
            <tr>
              <th scope="row">Luftfuktighet</th>
              <td>{this.props.weather.list[0].main.humidity} %</td>
              <td>{this.props.weather.list[1].main.humidity} %</td>
              <td>{this.props.weather.list[2].main.humidity} %</td>
              <td>{this.props.weather.list[3].main.humidity} %</td>
              <td>{this.props.weather.list[4].main.humidity} %</td>
              <td>{this.props.weather.list[5].main.humidity} %</td>
              <td>{this.props.weather.list[6].main.humidity} %</td>
              <td>{this.props.weather.list[7].main.humidity} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Forecast3H;
import React, { Component } from 'react';
import celciusConverter from './Utils/celciusConverter';
import timeConverter from './Utils/timeConverter';

class LongForecast extends Component {
  static defaultProps = {
    position: null,
    // currentDate: null,
  }

  componentWillMount() {
 //console.log(this.props.weather);
    
  }

  render() {
   // console.log(this.props);

    return (
      <div>
        <h3>Veckoöversikt</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">{this.props.weather.timeSeries[3].validTime.substr(0, 10)}</th>
              <th scope="col">{this.props.weather.timeSeries[27].validTime.substr(0, 10)}</th>
              <th scope="col">{this.props.weather.timeSeries[43].validTime.substr(0, 10)}</th>
              <th scope="col">{this.props.weather.timeSeries[47].validTime.substr(0, 10)}</th>
              <th scope="col">{this.props.weather.timeSeries[51].validTime.substr(0, 10)}</th>
              <th scope="col">{this.props.weather.timeSeries[55].validTime.substr(0, 10)}</th>
              <th scope="col">{this.props.weather.timeSeries[58].validTime.substr(0, 10)}</th>
            </tr>
            <tr>
              <th scope="col"></th>
              <th scope="col">{this.props.weather.timeSeries[3].validTime.substr(11, 5)}</th>
              <th scope="col">{this.props.weather.timeSeries[27].validTime.substr(11, 5)}</th>
              <th scope="col">{this.props.weather.timeSeries[43].validTime.substr(11, 5)}</th>
              <th scope="col">{this.props.weather.timeSeries[47].validTime.substr(11, 5)}</th>
              <th scope="col">{this.props.weather.timeSeries[51].validTime.substr(11, 5)}</th>
              <th scope="col">{this.props.weather.timeSeries[55].validTime.substr(11, 5)}</th>
              <th scope="col">{this.props.weather.timeSeries[58].validTime.substr(11, 5)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td><img src={"../icons/" + this.props.weather.timeSeries[3].parameters[18].values[0] + ".png"} /></td>
              <td><img src={"../icons/" + this.props.weather.timeSeries[27].parameters[18].values[0] + ".png"} /></td>
              <td><img src={"../icons/" + this.props.weather.timeSeries[43].parameters[18].values[0] + ".png"} /></td>
              <td><img src={"../icons/" + this.props.weather.timeSeries[47].parameters[18].values[0] + ".png"} /></td>
              <td><img src={"../icons/" + this.props.weather.timeSeries[51].parameters[18].values[0] + ".png"} /></td>
              <td><img src={"../icons/" + this.props.weather.timeSeries[55].parameters[18].values[0] + ".png"} /></td>
              <td><img src={"../icons/" + this.props.weather.timeSeries[58].parameters[18].values[0] + ".png"} /></td>
            </tr>
            <tr>
              <th scope="row">Temperatur</th>
              <td>{Math.round(celciusConverter(this.props.weather.timeSeries[3].parameters[11].values[0], this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(celciusConverter(this.props.weather.timeSeries[27].parameters[11].values[0], this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(celciusConverter(this.props.weather.timeSeries[43].parameters[11].values[0], this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(celciusConverter(this.props.weather.timeSeries[47].parameters[11].values[0], this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(celciusConverter(this.props.weather.timeSeries[51].parameters[11].values[0], this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(celciusConverter(this.props.weather.timeSeries[55].parameters[11].values[0], this.props.tempUnit))} {this.props.tempUnit}</td>
              <td>{Math.round(celciusConverter(this.props.weather.timeSeries[58].parameters[11].values[0], this.props.tempUnit))} {this.props.tempUnit}</td>
            </tr>
            <tr>
              <th scope="row">Luftfuktighet</th>
              <td>{this.props.weather.timeSeries[3].parameters[15].values[0]} %</td>
              <td>{this.props.weather.timeSeries[27].parameters[15].values[0]} %</td>
              <td>{this.props.weather.timeSeries[43].parameters[15].values[0]} %</td>
              <td>{this.props.weather.timeSeries[47].parameters[15].values[0]} %</td>
              <td>{this.props.weather.timeSeries[51].parameters[15].values[0]} %</td>
              <td>{this.props.weather.timeSeries[55].parameters[15].values[0]} %</td>
              <td>{this.props.weather.timeSeries[58].parameters[15].values[0]} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LongForecast;
import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

/*
function mapStateToProps(state) {
  return { weather: state.weather };
}
*/
  
function mapStateToProps({ weather }) {
  return { weather }; // same as { weather: weather } --> es6 syntax
  // basically if your key and value have the same name, this works
}

export default connect(mapStateToProps)(WeatherList);

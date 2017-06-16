import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    // converts from K to C
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord; // same as above

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} colour="blue" units="C" /></td>
        <td><Chart data={pressure} colour="red" units="hPa" /></td>
        <td><Chart data={humidity} colour="green" units="%" /></td>
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

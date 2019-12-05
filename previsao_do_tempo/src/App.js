import React from 'react';
import axios from 'axios';

const API = 'https://api.hgbrasil.com/weather?woeid=455827&format=json-cors';

export default class App extends React.Component {
  state = {
    city: '',
    forecast: []
  };

  componentDidMount() {
    axios.get(API)
      .then(({ data }) => {
        this.setState({
          city: data.results.city_name,
          forecast: data.results.forecast
        });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.city}</h1>
        {this.state.forecast.length}
      </div>
    );
  }
}

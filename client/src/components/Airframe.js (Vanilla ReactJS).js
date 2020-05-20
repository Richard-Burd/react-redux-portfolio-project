// This code is inactive & preserved for reference only.
// The objective was to get the Airframe component working with just React and not Redux
// before pulling Redux into the picture.

/*
import React, { Component } from 'react'

export default class Airframe extends Component {
  state = {
    loading: true,
    airframe: null,
  }

  async componentDidMount(){
    const response = await fetch(`http://localhost:3001/airframes/${this.props.match.params.airframeId}`);
    const data = await response.json();
    this.setState({ airframe: data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.airframe ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.airframe.name}</div>
            <div>{this.state.airframe.weight}</div>
            <div>{this.state.airframe.config}</div>
            <img src={this.state.airframe.image} alt="airframe" />
          </div>
        )}
      </div>
    );
  }
}
*/

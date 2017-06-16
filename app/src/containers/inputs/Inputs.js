import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Inputs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfRooms: 0,
      averageOccupancyOfRooms: 0,
      amountOfMeetingsDaily: 0
    }
  }

  handleFocus(event) {
    event.target.select()
  }

  handleNumberOfRooms(event) {
    this.setState({ numberOfRooms: event.target.value })
    this.props.handleNumberOfRooms(event.target.value)
  }

  averageOccupancyOfRooms(event) {
    this.setState({ averageOccupancyOfRooms: event.target.value })
    this.props.averageOccupancyOfRooms(event.target.value)
  }

  amountOfMeetingsDaily(event) {
    this.setState({ amountOfMeetingsDaily: event.target.value })
    this.props.amountOfMeetingsDaily(event.target.value)
  }

  render() {
    return (
      <div>
        <div id="number-of-rooms">
          <label htmlFor="_number-of-rooms"><h3>Number of rooms:</h3></label>
          <input
            id="_number-of-rooms"
            type="number"
            value="0"
            onChange={event => this.handleNumberOfRooms(event)}
            value={this.state.numberOfRooms}
            onFocus={event => this.handleFocus(event)}
          />
        </div>
        <div id="average-occupancy-of-rooms">
          <label htmlFor="_average-occupancy-of-rooms"><h3>Average occupancy of rooms:</h3></label>
          <input
            id="_average-occupancy-of-rooms"
            type="number"
            value="0"
            onChange={event => this.averageOccupancyOfRooms(event)}
            value={this.state.averageOccupancyOfRooms}
            onFocus={event => this.handleFocus(event)}
          />
        </div>
        <div id="amount-of-meetings-daily">
          <label htmlFor="_amount-of-meetings-daily"><h3>Amount of meetings per day:</h3></label>
          <input
            id="_amount-of-meetings-daily"
            type="number"
            value="0"
            onChange={event => this.amountOfMeetingsDaily(event)}
            value={this.state.amountOfMeetingsDaily}
            onFocus={event => this.handleFocus(event)}
          />
        </div>
	    </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(Inputs);

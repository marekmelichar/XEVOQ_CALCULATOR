import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Inputs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfRooms: 0,
      averageOccupancyOfRooms: 0,
      amountOfMeetingsDaily: 0,
      priceOfRent1sqm: 0,
      totalSquareMeters: 0,
      averageSalary: 0
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

  priceOfRent1sqm(event) {
    this.setState({ priceOfRent1sqm: event.target.value })
    this.props.priceOfRent1sqm(event.target.value)
  }

  totalSquareMeters(event) {
    this.setState({ totalSquareMeters: event.target.value })
    this.props.totalSquareMeters(event.target.value)
  }

  averageSalary(event) {
    this.setState({ averageSalary: event.target.value })
    this.props.averageSalary(event.target.value)
  }

  render() {
    console.log('AAAAAAAA', this.state);
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
        <div id="price-of-rent-1sqm">
          <label htmlFor="_price-of-rent-1sqm"><h3>Price of rent / 1 square meter:</h3></label>
          <input
            id="_price-of-rent-1sqm"
            type="number"
            value="0"
            onChange={event => this.priceOfRent1sqm(event)}
            value={this.state.priceOfRent1sqm}
            onFocus={event => this.handleFocus(event)}
          />
        </div>
        <div id="total-square-meters">
          <label htmlFor="_total-square-meters"><h3>Total square meters of all meeting rooms:</h3></label>
          <input
            id="_total-square-meters"
            type="number"
            value="0"
            onChange={event => this.totalSquareMeters(event)}
            value={this.state.totalSquareMeters}
            onFocus={event => this.handleFocus(event)}
          />
        </div>
        <div id="average-salary">
          <label htmlFor="_average-salary"><h3>Average salary per hour of all attendees of meetings:</h3></label>
          <input
            id="_average-salary"
            type="number"
            value="0"
            onChange={event => this.averageSalary(event)}
            value={this.state.averageSalary}
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

import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Inputs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfRooms: 0,
      averageCapacityOfRooms: 0,
      amountOfMeetingsDaily: 0,
      priceOfRent: 0,
      totalSquareMeters: 0,
      averageSalary: 0
    }
  }

  handleFocus(event) {
    event.target.select()
  }

  render() {
    return (
      <div>
        <label htmlFor="number-of-rooms"><h3>Number of rooms:</h3></label>
        <input
          id="number-of-rooms"
          type="number"
          onChange={event => this.setState({ numberOfRooms: event.target.value })}
          value={this.state.numberOfRooms}
          onFocus={event => this.handleFocus(event)}
        />
        <label htmlFor="average-capacity-of-rooms"><h3>Average capacity of rooms:</h3></label>
        <input
          id="average-capacity-of-rooms"
          type="number"
          onChange={event => this.setState({ averageCapacityOfRooms: event.target.value })}
          value={this.state.averageCapacityOfRooms}
          onFocus={event => this.handleFocus(event)}
        />
        <label htmlFor="amount-of-meetings-daily"><h3>Amount of meetings per day:</h3></label>
        <input
          id="amount-of-meetings-daily"
          type="number"
          onChange={event => this.setState({ amountOfMeetingsDaily: event.target.value })}
          value={this.state.amountOfMeetingsDaily}
          onFocus={event => this.handleFocus(event)}
        />
        <label htmlFor="price-of-rent"><h3>Price of rent for 1 square meter:</h3></label>
        <input
          id="price-of-rent"
          type="number"
          onChange={event => this.setState({ priceOfRent: event.target.value })}
          value={this.state.priceOfRent}
          onFocus={event => this.handleFocus(event)}
        />
        <label htmlFor="total-square-meters"><h3>Total square meters of all meeting rooms:</h3></label>
        <input
          id="total-square-meters"
          type="number"
          onChange={event => this.setState({ totalSquareMeters: event.target.value })}
          value={this.state.totalSquareMeters}
          onFocus={event => this.handleFocus(event)}
        />
        <label htmlFor="average-salary"><h3>Average salary per hour of all attendees of meetings:</h3></label>
        <input
          id="average-salary"
          type="number"
          onChange={event => this.setState({ averageSalary: event.target.value })}
          value={this.state.averageSalary}
          onFocus={event => this.handleFocus(event)}
        />
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

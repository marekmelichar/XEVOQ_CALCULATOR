import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Outputs extends Component {
  // componentWillReceiveProps(nextProps) {
  //
  //   if (nextProps.logic.number_of_rooms) {
  //     this.setState({ returnOfInvestment: nextProps.logic.return_of_investment })
  //   }
  //
  //   if (nextProps.logic.average_capacity_of_rooms) {
  //     this.setState({ betterOrganizedMeetingsSavings: nextProps.logic.average_capacity_of_rooms })
  //   }
  //
  //   if (nextProps.logic.amount_of_meetings_daily) {
  //     this.setState({ increasedCapacity: nextProps.logic.amount_of_meetings_daily })
  //   }
  //
  //   if (nextProps.logic.price_of_rent) {
  //     this.setState({ savings: nextProps.logic.price_of_rent })
  //   }
  //
  // }

  constructor(props) {
    super(props)

    this.state = {
      returnOfInvestment: 0,
      betterOrganizedMeetingsSavings: 0,
      increasedCapacity: 0,
      savings: 0,
      priceOfRent1sqm: 0,
      totalSquareMeters: 0,
      averageSalary: 0
    }
  }

  handleFocus(event) {
    event.target.select()
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

  renderOutput() {
    return (
      <div>
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

        <label htmlFor="return-of-investment"><h3>Return on investment / days:</h3></label>
        <input
          id="return-of-investment"
          type="text"
          value={this.state.returnOfInvestment}
        />
        <label htmlFor="better-organized-meetings-savings"><h3>Yearly savings based on saved hours thanks to better organized meetings:</h3></label>
        <input
          id="better-organized-meetings-savings"
          type="text"
          value={this.state.betterOrganizedMeetingsSavings}
        />
        <label htmlFor="increased-capacity-of-meetings"><h3>Increased capacity in % thanks to Cancel function and automated cancelling of meetings:</h3></label>
        <input
          id="increased-capacity-of-meetings"
          type="text"
          value={this.state.increasedCapacity}
        />
        <label htmlFor="savings-in-czk"><h3>Savings in CZK for increasing the capacity of meeting rooms:</h3></label>
        <input
          id="savings-in-czk"
          type="text"
          value={this.state.savings}
        />
      </div>
    )
  }

  render() {
    console.log(this.props.logic);
    return (
      <div>
        {this.renderOutput()}
	    </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {
    logic: state.logic
  };
};

export default connect(mapStateToProps, actions)(Outputs);

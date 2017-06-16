import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Outputs extends Component {

  componentWillReceiveProps(nextProps) {

    let { logic } = nextProps

    if (logic.number_of_rooms) {
      this.setState({ number_of_rooms: logic.number_of_rooms })
    }

    if (logic.total_square_meters > 0) {
      this.setState({ totalSquareMeters: parseFloat(logic.total_square_meters) })
    } else {
      this.setState({ totalSquareMeters: 165 })
    }

    if (logic.average_occupancy_of_rooms > 0) {
      this.setState({ average_occupancy_of_rooms: parseFloat(logic.average_occupancy_of_rooms) })
    } else {
      this.setState({ average_occupancy_of_rooms: 3.6 })
    }

    if (logic.price_of_rent_1sqm > 0) {
      this.setState({ priceOfRent1sqm: parseFloat(logic.price_of_rent_1sqm) })
    } else {
      this.setState({ priceOfRent1sqm: 500 })
    }

    if (logic.average_salary > 0) {
      this.setState({ averageSalary: parseFloat(logic.average_salary) })
    } else {
      this.setState({ averageSalary: 650 })
    }

    if(logic.number_of_rooms) {
      this.setState({ F39: ((this.state.totalSquareMeters * this.state.priceOfRent1sqm) / (20 * 8) / parseFloat(logic.number_of_rooms)).toFixed(1) })
    }

    if (logic.amount_of_meetings_daily > 0) {

      let J20 = (30 / 60) * (logic.amount_of_meetings_daily * 0.25) * this.state.F39
      let J28 = (15 / 60) * (logic.amount_of_meetings_daily * 0.225) * (this.state.average_occupancy_of_rooms * this.state.averageSalary)

      let a = J20 + J28
      let b = Math.ceil(a / 100.0) * 100

      this.setState({ final_savings_daily: b })
    } else {

      let F18 = ((30 / 60) * (parseFloat(this.state.number_of_rooms) * this.state.F39))
      let F28 = ((15 / 60) * (this.state.average_occupancy_of_rooms * this.state.averageSalary) * logic.number_of_rooms * 0.9)

      let a = F18 + F28
      let b = Math.ceil(a / 100.0) * 100

      this.setState({ final_savings_daily: b })

      let F21 = F18 * 4 * 4
      let F31 = F28 * 4 * 4

      let c = F21 + F31
      let d = Math.ceil(c / 1000.0) * 1000

      this.setState({ final_savings_monthly: d })
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      // returnOfInvestment: 0,
      // betterOrganizedMeetingsSavings: 0,
      // increasedCapacity: 0,
      // savings: 0,
      number_of_rooms: 0,
      average_occupancy_of_rooms: 3.6,
      amount_of_meetings_daily: 0,
      totalSquareMeters: 165,
      priceOfRent1sqm: 500,
      averageSalary: 650,
      final_savings_daily: 0,
      final_savings_monthly: 0,
      F39: 0


      // B31: 10,
      // B33: 12,
      // B35: 3,
      // B23: 15,
      // B25: 3,
      // B27: 6,
      // B16: 500,
      // B19: 650,
      // B42: 0,
      //C8: 0,
      // J18: 0.25,
      // J19: 0,
      //F35: 0, // 165 m2
      //F37: 0, // 500 kc / m2
      // C3: 0,
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
    console.log('STATE', this.state);

    return (
      <div>
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


        {/* <div id="return-of-investment">
          <label htmlFor="_return-of-investment"><h3>Return on investment / days:</h3></label>
          <input
            id="_return-of-investment"
            type="text"
            value={this.state.returnOfInvestment}
          />
        </div> */}
        {/* <div id="better-organized-meetings-savings">
          <label htmlFor="_better-organized-meetings-savings"><h3>Yearly savings based on saved hours thanks to better organized meetings:</h3></label>
          <input
            id="_better-organized-meetings-savings"
            type="text"
            value={this.state.betterOrganizedMeetingsSavings}
          />
        </div> */}
        {/* <div id="increased-capacity-of-meetings">
          <label htmlFor="_increased-capacity-of-meetings"><h3>Increased capacity in % thanks to Cancel function and automated cancelling of meetings:</h3></label>
          <input
            id="_increased-capacity-of-meetings"
            type="text"
            value={this.state.increasedCapacity}
          />
        </div> */}
        {/* <div id="savings-in-czk">
          <label htmlFor="_savings-in-czk"><h3>Savings in CZK for increasing the capacity of meeting rooms:</h3></label>
          <input
            id="_savings-in-czk"
            type="text"
            value={this.state.savings}
          />
        </div> */}
        <div id="FINAL_SAVINGS_DAILY">
          <label htmlFor="_FINAL_SAVINGS_DAILY"><h3>Final Savings in CZK DAILY:</h3></label>
          <input
            id="_FINAL_SAVINGS_DAILY"
            type="text"
            value={this.state.final_savings_daily}
          />
        </div>
        <div id="FINAL_SAVINGS_MONTHLY">
          <label htmlFor="_FINAL_SAVINGS_MONTHLY"><h3>Final Savings in CZK MONTHLY:</h3></label>
          <input
            id="_FINAL_SAVINGS_MONTHLY"
            type="text"
            value={this.state.final_savings_monthly}
          />
        </div>
      </div>
    )
  }

  render() {
    console.log('PROPS', this.props.logic);
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

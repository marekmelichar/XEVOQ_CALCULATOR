import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Outputs extends Component {

  componentDidMount() {
    this.props.C4(this.state.C4)
    this.props.C6(this.state.C6)
    this.props.C7(this.state.C7)
  }

  constructor(props) {
    super(props)

    this.state = {
      C4: 450,
      C6: 200,
      C7: 400,
      final_savings_daily: 0,
      final_savings_monthly: 0,
    }
  }

  handleFocus(event) {
    event.target.select()
  }

  C6(event) {
    let value = parseFloat(event.target.value)
    this.setState({ C6: value })
    this.props.C6(value)
  }

  C4(event) {
    let value = parseFloat(event.target.value)
    this.setState({ C4: value })
    this.props.C4(value)
  }

  C7(event) {
    let value = parseFloat(event.target.value)
    this.setState({ C7: value })
    this.props.C7(value)
  }

  renderOutput() {

    const { logic } = this.props

    let final_savings_daily = 0
    let final_savings_monthly = 0

    let B25 = parseFloat(logic.C3) * 0.2
    let B33 = parseFloat(logic.C3) - B25
    let F35 = parseFloat(logic.C4) || (10 * B33) + (15 * B25)
    let F36 = (3 * B33) + (6 * B25) / (B33 + B25)
    let F37 = parseFloat(logic.C6)
    let F38 = parseFloat(logic.C7)
    let B37 = 500
    let B38 = 650
    let F39 = (F35 * F37) / (20 * 8) / (parseFloat(logic.C3)).toFixed(1)
    let F40 = F36 * F38

    if (logic.C8 > 0) {

        let J19 = logic.C8 * 0.25
        let J20 = 0.5 * J19 * F39
        let J27 = logic.C8 * 0.225
        let F40 = logic.C5 * logic.C7
        let J28 = 0.25 * J27 * F40

        let a = J20 + J28
        let b = Math.ceil(a / 100.0) * 100

        final_savings_daily = b

        let F18 = (30 / 60) * parseFloat(logic.C3) * F39
        let F28 = (15 / 60) * logic.C5 * logic.C7 * logic.C3 * 0.9
        let F21 = F18 * 4 * 4
        let F31 = F28 * 4 * 4

        let c = F21 + F31
        let d = Math.ceil(c / 1000.0) * 1000

        final_savings_monthly = d

      } else {

        let F18 = (30 / 60) * parseFloat(logic.C3) * F39
        let F28 = (15 / 60) * logic.C5 * logic.C7 * logic.C3 * 0.9

        let a = F18 + F28
        let b = Math.ceil(a / 100.0) * 100

        final_savings_daily = b

        let F21 = F18 * 4 * 4
        let F31 = F28 * 4 * 4

        let c = F21 + F31
        let d = Math.ceil(c / 1000.0) * 1000

        final_savings_monthly = d
      }

    return (
      <div>
        <div id="total-square-meters">
          <label htmlFor="_total-square-meters"><h3>Total square meters of all meeting rooms:</h3></label>
          <input
            id="_total-square-meters"
            type="number"
            value="0"
            onChange={event => this.C4(event)}
            value={this.state.C4}
            onFocus={event => this.handleFocus(event)}
          />
        </div>
        <div id="price-of-rent-1sqm">
          <label htmlFor="_price-of-rent-1sqm"><h3>Price of rent / 1 square meter:</h3></label>
          <input
            id="_price-of-rent-1sqm"
            type="number"
            value="0"
            onChange={event => this.C6(event)}
            value={this.state.C6}
            onFocus={event => this.handleFocus(event)}
          />
        </div>
        <div id="average-salary">
          <label htmlFor="_average-salary"><h3>Average salary per hour of all attendees of meetings:</h3></label>
          <input
            id="_average-salary"
            type="number"
            value="0"
            onChange={event => this.C7(event)}
            value={this.state.C7}
            onFocus={event => this.handleFocus(event)}
          />
        </div>



        <div id="FINAL_SAVINGS_DAILY">
          <label htmlFor="_FINAL_SAVINGS_DAILY"><h3>Final Savings in CZK DAILY:</h3></label>
          <input
            id="_FINAL_SAVINGS_DAILY"
            type="text"
            value={final_savings_daily}
          />
        </div>
        <div id="FINAL_SAVINGS_MONTHLY">
          <label htmlFor="_FINAL_SAVINGS_MONTHLY"><h3>Final Savings in CZK MONTHLY:</h3></label>
          <input
            id="_FINAL_SAVINGS_MONTHLY"
            type="text"
            value={final_savings_monthly}
          />
        </div>
      </div>
    )
  }

  render() {
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

import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Outputs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      returnOfInvestment: 0,
      betterOrganizedMeetingsSavings: 0,
      increasedCapacity: 0,
      savings: 0
    }
  }

  render() {
    return (
      <div>
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
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(Outputs);

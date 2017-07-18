import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

import language from '../../../language/language_main';

class Inputs extends Component {

  componentDidMount() {
    this.props.C3(this.state.C3)
    this.props.C5(this.state.C5)
    this.props.C8(this.state.C8)
  }

  constructor(props) {
    super(props)

    this.state = {
      C3: 15
      // C5: 6,
      // C8: 8
    }
  }

  handleFocus(event) {
    event.target.select()
  }

  C3(event) {
    let value = parseFloat(event.target.value)
    this.setState({ C3: value })
    this.props.C3(value)
  }
  //
  // C5(event) {
  //   let value = parseFloat(event.target.value)
  //   this.setState({ C5: value })
  //   this.props.C5(value)
  // }
  //
  // C8(event) {
  //   let value = parseFloat(event.target.value)
  //   this.setState({ C8: value })
  //   this.props.C8(value)
  // }

  render() {
    return (
      <div className="row">
        <div id="number-of-rooms" className="column size_100">
          <input
            id="_number-of-rooms"
            type="number"
            value="0"
            onChange={event => this.C3(event)}
            value={this.state.C3}
            onFocus={event => this.handleFocus(event)}
          />
          <label htmlFor="_number-of-rooms"><h3>{language.calculator.number_of_rooms}</h3></label>
        </div>
        {/* <div id="average-occupancy-of-rooms" className="column size_33">
          <input
            id="_average-occupancy-of-rooms"
            type="number"
            value="0"
            onChange={event => this.C5(event)}
            value={this.state.C5}
            onFocus={event => this.handleFocus(event)}
          />
          <label htmlFor="_average-occupancy-of-rooms"><h3>Average occupancy of rooms</h3></label>
        </div>
        <div id="amount-of-meetings-daily" className="column size_33">
          <input
            id="_amount-of-meetings-daily"
            type="number"
            value="0"
            onChange={event => this.C8(event)}
            value={this.state.C8}
            onFocus={event => this.handleFocus(event)}
          />
          <label htmlFor="_amount-of-meetings-daily"><h3>Amount of meetings per day</h3></label>
        </div> */}
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

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
      C3: "15",
      numberOfChars: 1
      // C5: 6,
      // C8: 8
    }
  }

  handleFocus(event) {
    event.target.select()
    ga('send', 'event', 'calculator_input_clicked', 'click', 'product-tag', 1);
  }

  C3(event) {
    let value = parseFloat(event.target.value)
    let valueString = (event.target.value).toString()

    this.setState({
      numberOfChars: this.state.numberOfChars + 1,
      C3: valueString.substr(0, 3)
    })

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
            onChange={this.state.C3.length < 3 ? event => this.C3(event) : ''}
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





// kamil.dusek@ixperta.com

//  EN && /order form
// 1. prechod z hlavni strany a kliknutim na price package - OK
// 2. prime vyplneni formulare i zkouska na vynechani required pole pro email - OK

// DE a do you have any questions form
// 1. primo vyplneno - OK

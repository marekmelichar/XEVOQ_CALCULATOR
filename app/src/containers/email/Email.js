import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

class Email extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      phone: '',
      message: ''
    }
  }

  handleFocus(event) {
    event.target.select()
  }

  render() {
    return (
      <div>
        <h2>Leave us your contact informations and we will call you within next bussiness day :</h2>
        <form>
          <label htmlFor="email"><h3>Your e-mail:</h3></label>
          <input
            id="email"
            type="email"
            onChange={event => this.setState({ email: event.target.value })}
            value={this.state.email}
            onFocus={event => this.handleFocus(event)}
            required
          />
          <label htmlFor="phone"><h3>Your phone number:</h3></label>
          <input
            id="phone"
            type="number"
            onChange={event => this.setState({ phone: event.target.value })}
            value={this.state.phone}
            onFocus={event => this.handleFocus(event)}
            required
          />
          <label htmlFor="message"><h3>Do you want to leave us some message?</h3></label>
          <textarea
            id="message"
            onChange={event => this.setState({ message: event.target.value })}
            value={this.state.message}
            onFocus={event => this.handleFocus(event)}
          />
          <div>
            <button>Send</button>
          </div>
        </form>
	    </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(Email);

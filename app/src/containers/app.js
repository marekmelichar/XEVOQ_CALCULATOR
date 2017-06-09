import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

import Inputs from './inputs/Inputs';
import Outputs from './outputs/Outputs';
import Email from './email/Email';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column size_50">
            <Inputs />
          </div>
          <div className="column size_50">
            <Outputs />
          </div>
        </div>
        <div className="row">
          <div className="column size_100">
            <Email />
          </div>
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

export default connect(mapStateToProps, actions)(App);

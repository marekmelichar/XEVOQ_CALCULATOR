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
        <div id="calculator-testimonials" className="row">
          <div className="column size_50">
            <div className="logo">
              <img src={window.location.hostname !== 'localhost' ? `${window.location.href}/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/Dixons_Carphone.svg` : "../../../images/Dixons_Carphone.svg"} alt="Dixons_Carphone Logo" />
            </div>
          </div>
          <div className="column size_50">
            <h2>Success story thanks to XEVOQ</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div id="calculator-graph" className="row">
          <div className="column size_100">

          </div>
        </div>
        <div id="calculator-app" className="row">
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

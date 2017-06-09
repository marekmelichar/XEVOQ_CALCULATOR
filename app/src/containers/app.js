import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <div>
 			  react-redux starter
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

import React, { Component } from 'react';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import { connect } from 'react-redux';

import * as actions from '../actions';

import Inputs from './inputs/Inputs';
import Outputs from './outputs/Outputs';
import Email from './email/Email';

// const data = [
//       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
// ];

class App extends Component {
  render() {
    return (
      <div>
        <div id="calculator-testimonials">


          <div className="row">
            <div className="column size_100 slide-content">
              <h2 className="sub-heading">Dixons Carphone</h2>
              <div className="logo">
                <img src="https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/Dixons_Carphone.svg" alt="Dixons_Carphone Logo" />
              </div>
              <div className="testimonial-body">
                <h2>Success story thanks to XEVOQ</h2>
                <p>Rooms at Dixons are mostly booked fully from morning on. However, not all people actually use the rooms. Over a several-month period, Xevoq has on average provided more than 2 hours of cancelled meetings for each room each day. 30 hours of meeting room time saved per room effectively adds up to more than 3 free meeting rooms.</p>
              </div>
              <div id="calculator-graph" className="row">
                <div className="column size_100">
                  <img src="https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/xvq_graf_dixons.jpg" alt="Dixons_Carphone Graph" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column size_100 slide-content">
              <h2 className="sub-heading">Ixperta</h2>
              <div className="logo">
                <img src="https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/logo_ixperta.jpg" alt="Ixperta Logo" />
              </div>
              <div className="testimonial-body">
                <h2>Success story thanks to XEVOQ</h2>
                <p>In Ixperta, we always practice what we preach. That is why both our Brno and Prague offices have Xevoq installed on a total of 14 meeting rooms. And you can bet that our developers do not give us anything for free. We have to keep the system top notch.​</p>
              </div>
              <div id="calculator-graph" className="row">
                <div className="column size_100">
                  <img src="https://xevoq.com/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/xvq_graf_ixperta.jpg" alt="Ixperta Graph" />
                </div>
              </div>
            </div>
          </div>

        </div>


        <article id="calculator-app" className="row">
          <div className="row">
            <div className="column size_100">
              <h1>CALCULATE YOUR SAVINGS</h1>
              <Inputs />
            </div>
          </div>
          <div className="row">
            <div className="column size_100">
              <Outputs />
            </div>
          </div>
        </article>
        {/* <div className="row">
          <div className="column size_100">
            <Email />
          </div>
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

export default connect(mapStateToProps, actions)(App);

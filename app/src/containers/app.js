import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import { connect } from 'react-redux';

import * as actions from '../actions';

import Inputs from './inputs/Inputs';
import Outputs from './outputs/Outputs';
import Email from './email/Email';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class App extends Component {
  render() {
    return (
      <div>
        <div id="calculator-testimonials" className="row">
          <div className="column size_100">
            <h2 className="sub-heading">Dixons Carphone</h2>
            <div className="logo">
              <img src={window.location.hostname !== 'localhost' ? `${window.location.href}/wp-content/plugins/XEVOQ_CALCULATOR_REACT/app/images/Dixons_Carphone.svg` : "../../../images/Dixons_Carphone.svg"} alt="Dixons_Carphone Logo" />
            </div>
            <div className="testimonial-body">
              <h2>Success story thanks to XEVOQ</h2>
              <p>In Dixons, most of the rooms are booked all the time since morning. However, not all people actually use the rooms they booked. Using Xevoq over a few months has averaged more than an hour of cancelled meetings for each room each day. 15 hours of meeting room time saved each has effectively given them two more meeting rooms.</p>
            </div>
          </div>
        </div>

        <div id="calculator-graph" className="row">
          <div className="column size_100">
            <LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
             <XAxis dataKey="name"/>
             <YAxis/>
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
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

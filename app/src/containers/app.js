import React, { Component } from 'react';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import { connect } from 'react-redux';

import * as actions from '../actions';

import Inputs from './inputs/Inputs';
import Outputs from './outputs/Outputs';
import Email from './email/Email';

import Slider from 'react-slick';

import language from '../../language/language_main';

class App extends Component {
  render() {
    let settings = {
      arrows: true
    };

    return (
      <div>
        <div id="calculator-testimonials">
          <Slider {...settings}>
            <div>
              <h2 className="sub-heading">{language.testimonials.dixons.heading}</h2>
              <div className="logo">
                <img src={language.testimonials.dixons.logo} alt="Dixons_Carphone Logo" />
              </div>
              <div className="testimonial-body">
                <h2>{language.testimonials.dixons.sub_heading}</h2>
                <p>{language.testimonials.dixons.content}</p>
              </div>
              <div id="calculator-graph" className="row">
                <div className="column size_100">
                  <img src={language.testimonials.dixons.graph} alt="Dixons_Carphone Graph" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="sub-heading">{language.testimonials.ixperta.heading}</h2>
              <div className="logo">
                <img src={language.testimonials.ixperta.logo} alt="Ixperta Logo" />
              </div>
              <div className="testimonial-body">
                <h2>{language.testimonials.ixperta.sub_heading}</h2>
                <p>{language.testimonials.ixperta.content}</p>
              </div>
              <div id="calculator-graph" className="row">
                <div className="column size_100">
                  <img src={language.testimonials.ixperta.graph} alt="Ixperta Graph" />
                </div>
              </div>
            </div>
          </Slider>
        </div>


        <article id="calculator-app" className="row">
          <div className="row">
            <div className="column size_100">
              <h1>{language.calculator.heading}</h1>
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

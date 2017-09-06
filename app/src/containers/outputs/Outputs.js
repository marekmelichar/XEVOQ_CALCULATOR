import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

import language from '../../../language/language_main';

class Outputs extends Component {

  componentDidMount() {
  //   this.props.C4(this.state.C4)
  //   this.props.C6(this.state.C6)
  //   this.props.C7(this.state.C7)

    this.props.avg_employee_monthly_rate(this.state.avg_employee_monthly_rate)
    this.props.avg_room_sqm(this.state.avg_room_sqm)
  }

  constructor(props) {
    super(props)

    this.state = {
      // C4: 165,
      // C6: 500,
      // C7: 650,
      // final_savings_daily: 0,
      final_savings_monthly: 0,
      open_other_inputs: false,
      avg_employee_monthly_rate: 500,
      avg_room_sqm: 14
    }
  }

  handleFocus(event) {
    event.target.select()
  }

  // C6(event) {
  //   let value = parseFloat(event.target.value)
  //   this.setState({ C6: value })
  //   this.props.C6(value)
  // }
  //
  // C4(event) {
  //   let value = parseFloat(event.target.value)
  //   this.setState({ C4: value })
  //   this.props.C4(value)
  // }
  //
  // C7(event) {
  //   let value = parseFloat(event.target.value)
  //   this.setState({ C7: value })
  //   this.props.C7(value)
  // }


  // avg_employee_monthly_rate(event) {
  //   let value = parseFloat(event.target.value)
  //   if (value) {
  //     this.setState({ avg_employee_monthly_rate: value })
  //     this.props.avg_employee_monthly_rate(value)
  //   } else {
  //     this.setState({ avg_employee_monthly_rate: '' })
  //     this.props.avg_employee_monthly_rate(0)
  //   }
  // }

  // avg_room_sqm(event) {
  //   let value = parseFloat(event.target.value)
  //   if (value) {
  //     this.setState({ avg_room_sqm: value })
  //     this.props.avg_room_sqm(value)
  //   } else {
  //     this.setState({ avg_room_sqm: '' })
  //     this.props.avg_room_sqm(0)
  //   }
  // }

  renderOutput() {

    const { logic } = this.props
    //
    // let final_savings_daily = 0
    let final_savings_monthly = 0
    //
    // let B25 = parseFloat(logic.C3) * 0.2
    // let B33 = parseFloat(logic.C3) - B25
    // let F35 = parseFloat(logic.C4) || (10 * B33) + (15 * B25)
    // let F36 = (3 * B33) + (6 * B25) / (B33 + B25)
    // let F37 = parseFloat(logic.C6)
    // let F38 = parseFloat(logic.C7)
    // let B37 = 500
    // let B38 = 650
    // let F39 = (F35 * F37) / (20 * 8) / (parseFloat(logic.C3)).toFixed(1)
    // let F40 = F36 * F38
    //
    // if (logic.C8 > 0) {
    //
    //     let J19 = logic.C8 * 0.25
    //     let J20 = 0.5 * J19 * F39
    //     let J27 = logic.C8 * 0.225
    //     let F40 = logic.C5 * logic.C7
    //     let J28 = 0.25 * J27 * F40
    //
    //     let a = J20 + J28
    //     let b = Math.ceil(a / 100.0) * 100
    //
    //     final_savings_daily = b
    //
    //     let F18 = (30 / 60) * parseFloat(logic.C3) * F39
    //     let F28 = (15 / 60) * logic.C5 * logic.C7 * logic.C3 * 0.9
    //     let F21 = F18 * 4 * 4
    //     let F31 = F28 * 4 * 4
    //
    //     let c = F21 + F31
    //     let d = Math.ceil(c / 1000.0) * 1000
    //
    //     final_savings_monthly = d
    //
    //   } else {
    //
    //     let F18 = (30 / 60) * parseFloat(logic.C3) * F39
    //     let F28 = (15 / 60) * logic.C5 * logic.C7 * logic.C3 * 0.9
    //
    //     let a = F18 + F28
    //     let b = Math.ceil(a / 100.0) * 100
    //
    //     final_savings_daily = b
    //
    //     let F21 = F18 * 4 * 4
    //     let F31 = F28 * 4 * 4
    //
    //     let c = F21 + F31
    //     let d = Math.ceil(c / 1000.0) * 1000
    //
    //     final_savings_monthly = d
    //   }

    // let finalSUM = logic.C3 * logic.avg_employee_monthly_rate * logic.avg_room_sqm * 0.25
    // let finalSUM = 500 * 14 * logic.C3 * 0.25

    // final_savings_monthly = logic.C3 ? Math.ceil(finalSUM / 26.5) : 0


    // 7.8.2017 comment out START
    // let finalSUM = 3.6 * 650 * logic.C3 * 4 * 0.1 * 0.2

    // let final_savings_daily_and_room = logic.C3 ? Math.ceil(finalSUM / 26.5) : 0
    // let final_savings_daily = final_savings_daily_and_room * logic.C3
    //     final_savings_monthly = final_savings_daily * 20 / 26.5
    // 7.8.2017 comment out  END

    let finalSUMTop = 19 * 14 * logic.C3 * 0.25
    let finalSUMBottom = 3.6 * 25 * logic.C3 * 4 * 0.1 * 0.2
    let finalSUM = finalSUMTop + finalSUMBottom

    return (
      <div id="how-we-got-those-numbers">
        {/* <button onClick={() => this.setState({ open_other_inputs: !this.state.open_other_inputs })}>Configure other parameters</button>*/}

        <div id="FINAL_SAVINGS_MONTHLY">
          <label htmlFor="_FINAL_SAVINGS_MONTHLY"><h3>{language.calculator.how_we_got_those_numbers}</h3></label>
          <p className="how-did-we-calculate" onClick={() => this.setState({ open_other_inputs: !this.state.open_other_inputs })}>{language.calculator.how_did_we_calculate_this}</p>
          <input
            id="_FINAL_SAVINGS_MONTHLY"
            type="text"

            // value={isNaN(Math.ceil(final_savings_monthly)) ? 0 : `€ ${Math.ceil(final_savings_monthly).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(".", ",")}`}
            value={isNaN(Math.ceil(finalSUM)) ? 0 : `€ ${Math.ceil(finalSUM).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(".", ",")}`}
          />
          {/* <i className="icon-after-savings ion-ios-arrow-down"></i> */}
        </div>

        {this.state.open_other_inputs && <div id="output-fields">

          <div className="fields_heading">{language.calculator.fields_header_1}</div>
          <div className="fields_wrapper">
            {/* <div className="column size_25"> */}
              <div className="field">
                <h2>19 €</h2>
                <h3>{language.calculator.price_per_square_meter}</h3>
              </div>
            {/* </div> */}

            {/* <div className="field-multiply">*</div> */}

            {/* <div className="column size_25"> */}
              <div className="field">
                <h2>14 m<sup>2</sup></h2>
                <h3>{language.calculator.avg_room_size}</h3>
              </div>
            {/* </div> */}

            {/* <div className="field-multiply">*</div> */}

            {/* <div className="column size_25"> */}
              <div className="field">
                <h2>{logic.C3 || 0}</h2>
                <h3>{language.calculator.number_of_rooms}</h3>
              </div>
            {/* </div> */}

            {/* <div className="field-multiply">*</div>  */}

            {/* <div className="column size_25"> */}
              <div className="field">
                <h2>0.25</h2>
                <h3>{language.calculator.cancellation}</h3>
              </div>
            {/* </div> */}

            </div>

            <div className="divider_plus">+</div>

            <div className="fields_heading">{language.calculator.fields_header_2}</div>
            <div className="fields_wrapper">
              <div className="field_2">
                <h2>3.6</h2>
                <h3>{language.calculator.avg_number_of_people_per_meeting}</h3>
              </div>
              <div className="field_2">
                <h2>25 €</h2>
                <h3>{language.calculator.avg_hourly_rate}</h3>
              </div>
              <div className="field_2">
                <h2>{logic.C3 || 0}</h2>
                <h3>{language.calculator.number_of_rooms}</h3>
              </div>
              <div className="field_2">
                <h2>4</h2>
                <h3>{language.calculator.avg_number_of_meetings_per_day_room}</h3>
              </div>
              <div className="field_2">
                <h2>7 / 100</h2>
                <h3>{language.calculator.expected_number_of_collisions}</h3>
              </div>
              <div className="field_2">
                <h2>10</h2>
                <h3>{language.calculator.loss_of_time_in_minutes}</h3>
              </div>
            </div>





            {/* <div className="column size_50">
              <div id="avg_employee_monthly_rate">
                <input
                  id="_avg_employee_monthly_rate"
                  type="number"
                  onChange={event => this.avg_employee_monthly_rate(event)}
                  value={this.state.avg_employee_monthly_rate}
                  onFocus={event => this.handleFocus(event)}
                />
                <label htmlFor="_avg_employee_monthly_rate"><h3>Average salary of meeting attendees:</h3></label>
              </div>
            </div>

            <div className="column size_50">
              <div id="avg_room_sqm">
                <input
                  id="_avg_room_sqm"
                  type="number"
                  onChange={event => this.avg_room_sqm(event)}
                  value={this.state.avg_room_sqm}
                  onFocus={event => this.handleFocus(event)}
                />
                <label htmlFor="_avg_room_sqm"><h3>Average room square meters:</h3></label>
              </div>
            </div> */}

            {/* <div className="column size_33">
              <div id="total-square-meters">
                <input
                  id="_total-square-meters"
                  type="number"
                  value="0"
                  onChange={event => this.C4(event)}
                  value={this.state.C4}
                  onFocus={event => this.handleFocus(event)}
                />
                <label htmlFor="_total-square-meters"><h3>Total square meters of all meeting rooms:</h3></label>
              </div>
            </div> */}

          {/* <div className="column size_33">
            <div id="price-of-rent-1sqm">
              <input
                id="_price-of-rent-1sqm"
                type="number"
                value="0"
                onChange={event => this.C6(event)}
                value={this.state.C6}
                onFocus={event => this.handleFocus(event)}
              />
              <label htmlFor="_price-of-rent-1sqm"><h3>Price of rent / 1 square meter:</h3></label>
            </div>
          </div> */}

          {/* <div className="column size_33">
            <div id="average-salary">
              <input
                id="_average-salary"
                type="number"
                value="0"
                onChange={event => this.C7(event)}
                value={this.state.C7}
                onFocus={event => this.handleFocus(event)}
              />
              <label htmlFor="_average-salary"><h3>Average salary per hour of all attendees of meetings:</h3></label>
            </div>
          </div> */}

          {/*
          <div id="FINAL_SAVINGS_DAILY">
            <label htmlFor="_FINAL_SAVINGS_DAILY"><h3>Final Savings in CZK DAILY:</h3></label>
            <input
              id="_FINAL_SAVINGS_DAILY"
              type="text"
              value={final_savings_daily}
            />
          </div> */}
          {/* <div className="hide-button" onClick={() => this.setState({ open_other_inputs: !this.state.open_other_inputs })}>
            Hide
          </div> */}
        </div>}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderOutput()}
	    </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {
    logic: state.logic
  };
};

export default connect(mapStateToProps, actions)(Outputs);

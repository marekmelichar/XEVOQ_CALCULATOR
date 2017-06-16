import {
  // INPUTS
  NUMBER_OF_ROOMS,
  AVERAGE_OCCUPANCY_OF_ROOMS,
  AMOUNT_OF_MEETINGS_DAILY,
  PRICE_OF_RENT,
  TOTAL_SQUARE_METERS, AVERAGE_SALARY,
  // OUTPUTS
  RETURN_OF_INVESTMENT,
  BETTER_ORGANIZED_MEETINGS,
  INCREASED_CAPACITY,
  SAVINGS
} from '../actions/index';

let INITIAL_STATE = {
  // B31: 10,
  // B33: 12,
  // B35: 3,
  // B23: 15,
  // B25: 3,
  // B27: 6,
  // B16: 500,
  // B19: 650,
  // B42: 0,
  // C8: 0,
  // J18: 0.25,
  // J19: C8 * J18,
  // F35: 0,
  // F37: 0,
  // C3: 0,
  // F39: (F35 * F37) / (20 * 8) / C3,

  // inputs
  number_of_rooms: 0,
  average_capacity_of_rooms: 0,
  amount_of_meetings_daily: 0,
  price_of_rent: 0,
  total_square_meters: 0,
  average_salary: 0,

  // outputs
  return_of_investment: 0,
  better_organized_meetings: 0,
  increased_capacity: 0,
  savings: 0
}

export default function(state = INITIAL_STATE, action) {

  // INITIAL
  // let B31 = 10,
  //     B33 = 12,
  //     B35 = 3,
  //     B23 = 15,
  //     B25 = 3,
  //     B27 = 6,
  //     B16 = 500,
  //     B19 = 650,
  //     B42 = 0,
  //     C8 = state.amount_of_meetings_daily,
  //     J18 = 0.25,
  //     J19 = C8 * J18,
  //     F35 = state.total_square_meters,
  //     F37 = state.price_of_rent_1sqm,
  //     C3 = state.number_of_rooms,
  //     F39 = (F35 * F37) / (20 * 8) / C3

  // if (action.type === NUMBER_OF_ROOMS || AVERAGE_OCCUPANCY_OF_ROOMS || AMOUNT_OF_MEETINGS_DAILY || PRICE_OF_RENT || TOTAL_SQUARE_METERS, AVERAGE_SALARY || RETURN_OF_INVESTMENT || BETTER_ORGANIZED_MEETINGS || INCREASED_CAPACITY || SAVINGS) {
  //   console.log(C8);
  //
  // }

  switch (action.type) {
    case NUMBER_OF_ROOMS:
      return({
        ...state,
        number_of_rooms: action.number
      });
      break;
    case AVERAGE_OCCUPANCY_OF_ROOMS:
      return({
        ...state,
        average_capacity_of_rooms: action.number
      });
      break;
    case AMOUNT_OF_MEETINGS_DAILY:
      return({
        ...state,
        amount_of_meetings_daily: action.number
      });
      break;
    case PRICE_OF_RENT:
      return({
        ...state,
        price_of_rent_1sqm: action.number
      });
      break;
    case TOTAL_SQUARE_METERS:
      return({
        ...state,
        total_square_meters: action.number
      });
      break;
    case AVERAGE_SALARY:
      return({
        ...state,
        average_salary: action.number
      });
      break;
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};

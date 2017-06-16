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
  // inputs
  number_of_rooms: 0,
  average_occupancy_of_rooms: 0,
  amount_of_meetings_daily: 0,
  price_of_rent_1sqm: 0,
  total_square_meters: 0,
  average_salary: 0,

  // outputs
  return_of_investment: 0,
  better_organized_meetings: 0,
  increased_capacity: 0,
  savings: 0
}

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {
    case NUMBER_OF_ROOMS:
      return({
        ...state,
        number_of_rooms: action.number
      });
      break;
    case AVERAGE_OCCUPANCY_OF_ROOMS:
      console.log(action.number);
      return({
        ...state,
        average_occupancy_of_rooms: action.number
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

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
  C3: 0,
  C4: 0,
  C5: 0,
  C6: 0,
  C7: 0,
  C8: 0

}

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {
    case NUMBER_OF_ROOMS:
      return({
        ...state,
        C3: action.number
      });
      break;
    case AVERAGE_OCCUPANCY_OF_ROOMS:
      // console.log(action.number);
      return({
        ...state,
        C5: action.number
      });
      break;
    case AMOUNT_OF_MEETINGS_DAILY:
      return({
        ...state,
        C8: action.number
      });
      break;
    case PRICE_OF_RENT:
      return({
        ...state,
        C6: action.number
      });
      break;
    case TOTAL_SQUARE_METERS:
      return({
        ...state,
        C4: action.number
      });
      break;
    case AVERAGE_SALARY:
      return({
        ...state,
        C7: action.number
      });
      break;
    default:
      // if nothing, return the last state, but instead of returning undefined, then we set null above
      return state;
  }
};

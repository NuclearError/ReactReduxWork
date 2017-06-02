import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // create new array containing old stuff + new payload
    // return [ new stuff, ...old stuff] //
    // (adds the old stuff to the new stuff)
    return [ action.payload.data, ...state];
    // Alternative way to write this:
    // return state.concat([action.payload.data]);
  }
  return state;
}

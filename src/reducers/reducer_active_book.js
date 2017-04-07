// The state argument is not the application state,
// only the state that this reducer is responsible for.

// State is initially set to null because reducers are not
// allowed to return 'undefined' (eg. when app starts)
export default function(state = null, action) {
  // state += 1 // basic example of incrementation caused by an action

  switch(action.type) {
  case: 'BOOK_SELECTED':
    // avoid doing things like "state.title = book.title"
    // instead, always return a fresh object as below
    return action.payload;
  }
  return state;
}

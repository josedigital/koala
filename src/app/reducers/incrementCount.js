let initialState = 0

function incrementCounter (state=initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1

    default:
      return state
  }
}

export default incrementCounter

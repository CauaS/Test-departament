import * as scheduleTypes from "./types";

function reducer(state, action) {
  console.log(action.payload);
  switch (action.type) {
    case scheduleTypes.ADD:
      return [...state, action.payload];
    case scheduleTypes.ADD_SCHEDULE:
      return [
        ...state,
        state[action.payload.position].schedules.push(action.payload.item)
      ];
    case scheduleTypes.CURRENT:
      return action.payload;
    default:
      throw new Error();
  }
}

export default reducer;

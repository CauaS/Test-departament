import * as scheduleTypes from "./types";

export function addRequestAndSchedule(item) {
  return {
    type: scheduleTypes.ADD,
    payload: item
  };
}
export function addSchedule(position, item) {
  return {
    type: scheduleTypes.ADD_SCHEDULE,
    payload: {
      position,
      item
    }
  };
}
export function current(item) {
  return {
    type: scheduleTypes.CURRENT,
    payload: item
  };
}

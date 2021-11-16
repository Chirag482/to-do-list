export default function globalTask(state = [], action) {
  switch (action.type) {
    case "ADD_TASK":
      var newState = [action.task, ...state];
      return newState;
    default:
      return state;
  }
}

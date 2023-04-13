import { SET_STRING_VALUE } from "../Action";
const initialState = {
  stringValue: "",
};

export function stringReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STRING_VALUE:
      return {
        ...state,
        stringValue: action.payload,
      };
    default:
      return state;
  }
}

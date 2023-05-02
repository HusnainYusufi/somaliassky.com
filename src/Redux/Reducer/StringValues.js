const initialState = {
  myString: "",
};
const myReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_MY_STRING":
      return {
        ...state,
        myString: action.payload,
      };
    default:
      return state;
  }
};
export default myReducer;

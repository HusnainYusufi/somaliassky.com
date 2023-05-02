export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const SET_STRING_VALUE = "SET_STRING_VALUE";

export function setStringValue(value) {
  return {
    type: SET_STRING_VALUE,
    payload: value,
  };
}
export const setChatBoxIdNew = (newString) => {
  console.log(newString);
  return {
    type: "SET_MY_STRING",
    payload: newString,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

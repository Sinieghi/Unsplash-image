import { DARK, SUBMIT } from "./action";

export const reducer = (state, action) => {
  if (action.type === DARK) {
    let { isDarkTheme } = state;
    !isDarkTheme ? (isDarkTheme = true) : (isDarkTheme = false);

    return { ...state, isDarkTheme };
  }
  if (action.type === SUBMIT) {
    // console.log(action.payload.search);

    return { ...state, searchValue: action.payload.search };
  }

  throw new Error(`No Match "${action.type}" - action type`);
};

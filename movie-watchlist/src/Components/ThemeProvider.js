import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiState, themeFn } from "../Redux/uiSlice";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const { theme } = useSelector(uiState);
  const dispatch = useDispatch();
  console.log(theme);

  const toggleTheme = (val) => {
    console.log(val);
    dispatch(themeFn(val === "dark" ? "dark" : "light"));
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

import { useContext } from "react";
import { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiState, themeFn } from "../Redux/uiSlice";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const { theme } = useSelector(uiState);
  const dispatch = useDispatch();

  const toggleTheme = (val) => {
    dispatch(themeFn(val === "dark" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

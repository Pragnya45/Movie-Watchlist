import { useTheme } from "./ThemeProvider";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";

export function ThemeSwitch() {
  const { toggleTheme, theme } = useTheme();

  const buttonClasses = `text-color-${theme} border-color-${theme} bg-color-${theme}`;
  return (
    <div className="">
      {theme === "light" ? (
        <button
          className="shadow-lg rounded-full p-2 buttonClasses"
          onClick={() => {
            toggleTheme("dark");
          }}
        >
          <IoMdMoon color="#000" size={25} className=" " />
        </button>
      ) : (
        <button
          onClick={() => {
            toggleTheme("light");
          }}
          className="shadow-lg rounded-full p-2 buttonClasses"
        >
          <FiSun color="#fff" size={25} />
        </button>
      )}{" "}
    </div>
  );
}

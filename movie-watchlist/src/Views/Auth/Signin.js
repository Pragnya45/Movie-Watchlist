import signinIcon from "../../assets/signin.gif";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useNotification from "../../Hooks/useNotification";
import { profileFn } from "../../Redux/profileSlice";
import { useTheme } from "../../Components/ThemeProvider";
export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { showMessage } = useNotification();
  const [email, setEmail] = useState();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSignIn = async () => {
    localStorage.setItem("email", email);
    dispatch(
      profileFn({
        isLoggedIn: true,
        email: email,
      })
    );
    navigate("/");
    showMessage({
      type: "success",
      value: "SignedIn Successfully",
    });
  };
  return (
    <div
      className={`bg-color-sidebar-${theme} flex items-center justify-center w-full h-screen`}
    >
      <div
        className={`bg-color-${theme} rounded-lg shadow-lg flex flex-col gap-3 items-center py-8 px-4 mx-auto max-w-sm w-full`}
      >
        <img
          src={signinIcon}
          alt="signin icons"
          className="w-20 h-20 rounded-lg "
        />
        <form className="flex flex-col items-center w-full gap-3">
          <div className="w-full">
            <label className={`text-color-${theme}`}>Email:</label>
            <input
              type="email"
              placeholder="enter email"
              name="email"
              value={email}
              onChange={handleChange}
              className="outline-none rounded-md bg-slate-100 p-2 w-full"
            />
          </div>
          <button
            onClick={handleSignIn}
            className="bg-red-600 mt-2 text-white w-[150px] px-4 py-2 rounded-full hover:scale-110 transition-all"
          >
            Signin
          </button>
        </form>
      </div>
    </div>
  );
}

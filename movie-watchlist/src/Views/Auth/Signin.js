import signinIcon from "../../assets/signin.gif";
export default function Signin() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="bg-white rounded-lg shadow-lg flex flex-col gap-3 items-center py-8 px-4 max-auto max-w-sm w-full">
        <img src={signinIcon} alt="signin icons" className="w-20 h-20" />
        <form className="flex flex-col items-center w-full gap-3">
          <div className="w-full">
            <label>Email:</label>
            <input
              type="email"
              placeholder="enter email"
              className="outline-none bg-slate-100 p-2 w-full"
            />
          </div>
          <button className="bg-red-600 mt-2 text-white w-[150px] px-4 py-2 rounded-full hover:scale-110 transition-all">
            Signin
          </button>
        </form>
      </div>
    </div>
  );
}

import "./../media/css/AppHeader.css";
import { MdAdd } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RN } from "./RouletteBox";

const AppHeaderMenu = () => {
  return (
    <div>
      <span>manage history</span>
      <span>change other roulette </span>
      <span>create other session</span>
      <span>create other roulette</span>
      <span>close roulette</span>
      <span>logout</span>
    </div>
  );
};
const AppHeader = () => {
  // pass button actions to home component
  return (
    <div className="a-h">
      <div className="a-h-1">
        <div>
          <input type={"number"} min={0} max={36} maxLength={2} />
          <button>
            <MdAdd />
          </button>
        </div>

        <button>
          <FiSettings />
        </button>
        {/* open options
         * maange history
         * change other roulette
         * create otehr session
         * create other roulette
         * close roulette
         * user setting
         * logout
         */}
      </div>
      <div className="sessions-algs">
        <div>
          <span>session 1</span>
        </div>
        <div>session 2</div>
        <div>session 3</div>
        <div>session 4</div>
      </div>
      <div className="fav-algs">
        <div className="fav-alg">
          <div className="del-fav-alg">
            <span>x</span>
          </div>
          <span>
            <span style={{ color: "#ffa500" }}>&#9733;</span> fav alg 1
          </span>
        </div>
        <div className="fav-alg">
          <div className="del-fav-alg">
            <span>x</span>
          </div>
          <span>
            <span style={{ color: "#ffa500" }}>&#9733;</span> fav alg 1
          </span>
        </div>
        <div className="fav-alg">
          <div className="del-fav-alg">
            <span>x</span>
          </div>
          <span>
            <span style={{ color: "#ffa500" }}>&#9733;</span> fav alg 1
          </span>
        </div>
      </div>
      <div className="nums-history">
        <RN n={{ id: 0, value: 34, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "black" }} />
        <RN n={{ id: 4, value: 10, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "green" }} />
        <RN n={{ id: 0, value: 34, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "black" }} />
        <RN n={{ id: 4, value: 10, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "green" }} />
        <RN n={{ id: 0, value: 34, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "black" }} />
        <RN n={{ id: 4, value: 10, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "green" }} />
        <RN n={{ id: 0, value: 34, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "black" }} />
        <RN n={{ id: 4, value: 10, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "green" }} />
        <RN n={{ id: 0, value: 34, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "black" }} />
        <RN n={{ id: 4, value: 10, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "green" }} />
        <RN n={{ id: 0, value: 34, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "black" }} />
        <RN n={{ id: 4, value: 10, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "green" }} />
        <RN n={{ id: 0, value: 34, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "black" }} />
        <RN n={{ id: 4, value: 10, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "green" }} />
        <RN n={{ id: 0, value: 34, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "black" }} />
        <RN n={{ id: 4, value: 10, color: "red" }} />
        <RN n={{ id: 4, value: 10, color: "green" }} />
      </div>
    </div>
  );
};

export default AppHeader;

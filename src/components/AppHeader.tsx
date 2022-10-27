import "./../media/css/AppHeader.css";
import { MdAdd } from "react-icons/md";
import { FiSettings, FiLogIn } from "react-icons/fi";
import { RN } from "./RouletteBox";
import { IoMdCreate } from "react-icons/io";
import { FaTimes, FaHistory, FaExchangeAlt, FaPlus } from "react-icons/fa";
import Cookies from "universal-cookie";
import { removeToken } from "../context/AppActions";
import { FormEvent, useContext, useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import { SessionRouletteI } from "../types/SessionRoulette";
import { RouletteI } from "../types/Roulette";
import rouletteApi from "./../api/roulette";
import sessionApi from "./../api/sessionRoulette";
import actionsRoulette from "../context/actions/roulette";

export const AppHeaderMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const { dispatch, auth, roulettes, focusRoulette } = useContext(AppContext);
  const [roulette, setRoulette] = useState<RouletteI | null>(null);
  const [session, setSession] = useState<SessionRouletteI | null>(null);
  const cookies = new Cookies();
  const logOut = () => {
    cookies.remove("auth");
    removeToken(dispatch);
  };
  const addFocusRoulette = (r: RouletteI) =>
    actionsRoulette.addFocusRoulette(r, dispatch);
  const createRoulette = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res =
      roulette && (await rouletteApi.postRoulette(auth.token, roulette));
    console.log(res);
  };
  const createSession = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res =
      session && (await sessionApi.postSessionRoulette(auth.token, session));
    console.log(res);
  };
  const changeRouletteName = (e: FormEvent<HTMLInputElement>) =>
    setRoulette({ name: e.currentTarget.value });
  const getRoulettesByUserId = async () => {
    const res = await rouletteApi.getRouletteByUserId(auth.token);
    if (res.status === 200) {
      actionsRoulette.addRoulettes(res.res, dispatch);
    }
  };
  useEffect(() => {
    getRoulettesByUserId();
  }, []);
  return (
    <div className="a-h-m" style={{ position: "absolute" }}>
      <div className="a-h-m-head">
        <div>
          <div>
            <span>username: </span>
            <span>{focusRoulette ? focusRoulette.name : "null "}</span>
          </div>
        </div>
        <div className="close-a-h-m" onClick={closeMenu}>
          <FaTimes />
        </div>
      </div>
      <div className="a-h-m-content">
        <div>
          manage Roulette{" "}
          <span>
            <FaHistory />
          </span>
        </div>
        <div>
          change other roulette
          <span>
            <FaExchangeAlt />
          </span>
        </div>
        <div>
          {roulettes.map((item, index) => {
            return (
              <div key={index} onClick={() => addFocusRoulette(item)}>
                {item.name}
              </div>
            );
          })}
        </div>
        <div>
          create other roulette
          <span>
            <IoMdCreate />
          </span>
        </div>
        <div>
          <form onSubmit={createRoulette} action="">
            <input onChange={changeRouletteName} placeholder="new roulette" />
            <input type="submit" value="create" />
          </form>
        </div>
        <div onClick={logOut}>
          logout
          <span>
            <FiLogIn />
          </span>
        </div>
      </div>
    </div>
  );
};
const AppHeader = ({ openMenu }: { openMenu: () => void }) => {
  // pass button actions to home component
  return (
    <div className="a-h">
      <div className="a-h-1">
        <div>
          <input
            placeholder="number"
            type={"number"}
            min={0}
            max={36}
            maxLength={2}
          />
          <button>
            <MdAdd />
          </button>
        </div>

        <button onClick={openMenu} style={{ cursor: "pointer" }}>
          <FiSettings />
        </button>
      </div>
      <div className="sessions-algs">
        <div>
          <span>session 1</span>
        </div>
        <div className="session-alg-focus">session 2</div>
        <div>session 3</div>
        <div>session 4</div>
        <div>
          <button>
            <FaPlus />
          </button>
        </div>
        <div>
          <form>
            <input placeholder="new session" />
            <button>create</button>
          </form>
        </div>
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

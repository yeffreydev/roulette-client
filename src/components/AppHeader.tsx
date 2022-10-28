import "./../media/css/AppHeader.css";
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
import numberApi from "./../api/numberRoulette";
import sessionApi from "./../api/sessionRoulette";
import actionsRoulette from "../context/actions/roulette";
import actionsSession from "../context/actions/session";
import actionsNumber from "../context/actions/number";
import { NumberRouletteI, NumberRouletteInputI } from "../types/NumberRoulette";
import { getNumberFromRoulette } from "../utils/rouletteNumbers";
import algorithmActions from "../context/actions/algorithm";

export const AppHeaderMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const { dispatch, auth, roulettes, focusRoulette } = useContext(AppContext);
  const [roulette, setRoulette] = useState<RouletteI | null>(null);
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
  const { auth, focusRoulette, dispatch, sessions, focusSession, numbers } =
    useContext(AppContext);
  const [selectedNumber, setSelectedNumber] = useState<NumberRouletteI | null>(
    null
  );
  const [session, setSession] = useState<SessionRouletteI | null>({
    name: "",
  });
  const [number, setNumber] = useState<NumberRouletteInputI>({
    valueNumber: "",
  });

  // pass button actions to home component

  const changeNumber = (e: FormEvent<HTMLInputElement>) => {
    !selectedNumber
      ? setNumber({ ...number, valueNumber: parseInt(e.currentTarget.value) })
      : setSelectedNumber({
          ...selectedNumber,
          valueNumber: parseInt(e.currentTarget.value),
        });
  };
  const selectNumber = (n: NumberRouletteI) => {
    setSelectedNumber(n);
    setNumber({ valueNumber: "" });
  };
  const createNumber = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedNumber) {
      const res =
        number &&
        focusSession &&
        (await numberApi.postNumberRoulette(auth.token, {
          valueNumber:
            typeof number.valueNumber === "string"
              ? parseInt(number.valueNumber)
              : number.valueNumber,
          rouletteId: focusRoulette?.id,
          sessionId: focusSession.id,
        }));
      if (res?.status !== 200) {
        return "error";
      }
      algorithmActions.addAlgs(res.res.algs, dispatch);
      setNumber({ valueNumber: "" });
      return actionsNumber.addNumber(res.res.number, dispatch);
    }
    const res = await numberApi.putNumberRoulette(auth.token, selectedNumber);
    if (res.status === 200) {
      algorithmActions.addAlgs(res.res.algs, dispatch);
      actionsNumber.updateNumber(selectedNumber, dispatch);
    }
  };
  const createSession = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!focusRoulette) return alert("please select a roulette");
    const res =
      session &&
      (await sessionApi.postSessionRoulette(auth.token, {
        name: session.name,
        rouletteId: focusRoulette?.id,
      }));
    console.log(res);
    if (res?.status === 200) {
      actionsSession.addSession(res.res, dispatch);
      actionsSession.addSessionFocus(res.res, dispatch);
    }
  };
  const deleteNumber = async () => {
    if (selectedNumber) {
      const res = await numberApi.deleteNumberRoulette(
        auth.token,
        selectedNumber.id ? selectedNumber.id : NaN
      );
      if (res.status === 200) {
        algorithmActions.addAlgs(res.res.algs, dispatch);
        actionsNumber.removeNumber(
          selectedNumber.id ? selectedNumber.id : NaN,
          dispatch
        );
        setSelectedNumber(null);
      }
    }
  };
  const changeSessionName = (e: FormEvent<HTMLInputElement>) =>
    setSession({ ...session, name: e.currentTarget.value });
  const getSessions = async () => {
    const res =
      focusRoulette &&
      (await sessionApi.getSessionsRouletteByRouletteId(
        auth.token,
        focusRoulette.id ? focusRoulette.id : ""
      ));
    if (res?.status === 200) {
      actionsSession.addSessions(res.res, dispatch);
    }
  };
  const getNumbers = async () => {
    const res =
      focusSession &&
      (await numberApi.getNumbersRouletteBySessionId(
        auth.token,
        focusSession.id ? focusSession.id : 0
      ));
    if (res?.status == 200) {
      algorithmActions.addAlgs(res.res.algs, dispatch);
      actionsNumber.addNumbers(res.res.numbers, dispatch);
    }
  };
  useEffect(() => {
    getSessions();
    getNumbers();
  }, [focusRoulette, focusSession]);
  return (
    <div className="a-h">
      <div className="a-h-1">
        <button onClick={openMenu} style={{ cursor: "pointer" }}>
          <FiSettings />
        </button>
      </div>
      <div className="sessions-algs">
        {sessions.data ? (
          sessions.data.map((item, index) => {
            return (
              <div
                onClick={() => actionsSession.addSessionFocus(item, dispatch)}
                className={
                  focusSession?.id === item.id ? "session-alg-focus" : ""
                }
                key={index}
              >
                <span>{item.name}</span>
              </div>
            );
          })
        ) : (
          <div>please select a roulette</div>
        )}

        <div>
          <button>
            <FaPlus />
          </button>
        </div>
        <div>
          <form onSubmit={createSession}>
            <input onChange={changeSessionName} placeholder="new session" />
            <button type="submit">create</button>
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
        {numbers.data.map((item, index) => {
          let n = getNumberFromRoulette(item.valueNumber);
          return (
            <RN
              key={index}
              click={() => selectNumber(item)}
              n={n ? n : { id: 0, value: 0, color: "#000" }}
            />
          );
        })}
        <form onSubmit={createNumber}>
          <input
            placeholder="number"
            type={"number"}
            onChange={changeNumber}
            min={0}
            value={
              !selectedNumber
                ? number?.valueNumber.toString()
                : selectedNumber.valueNumber.toString()
            }
            max={36}
            maxLength={2}
          />
          <button type="submit">{selectedNumber ? "update" : "create"}</button>
        </form>
      </div>
      <div className="nums-history">
        {selectedNumber ? (
          <div>
            <button onClick={() => setSelectedNumber(null)}>unselect</button>
            <button onClick={() => deleteNumber()}>delete</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AppHeader;

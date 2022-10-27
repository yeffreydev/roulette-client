import appReducer from "./AppReducer";
import AppContext from "./AppContext";
import Cookies from "universal-cookie";
import initalStateApp from "./initialState";
import { ReactNode, useEffect, useReducer } from "react";
import { addToken, noTokenProvider } from "./AppActions";

const AppState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initalStateApp);
  const cookies = new Cookies();

  //token loading app
  useEffect(() => {
    const auth = cookies.get("auth");
    if (auth) return addToken(auth.token, dispatch);
    noTokenProvider(dispatch);
    //eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{ auth: state.auth, dispatch, roulettes: state.roulettes }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;

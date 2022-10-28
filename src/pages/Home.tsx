import { useContext, useState } from "react";
import "./../media/css/Home.css";
import { AppHeaderMenu } from "../components/AppHeader";
import Main from "./../components/Main";
import AppHeader from "../components/AppHeader";
import RouletteBox from "../components/RouletteBox";
import AppContext from "../context/AppContext";
const Home = () => {
  const { algs } = useContext(AppContext);
  const [homeState, setHomeState] = useState({ IsAHMOpen: false });
  //open app heade menu
  const openAHMenu = () => {
    setHomeState({ ...homeState, IsAHMOpen: true });
  };
  const closeAHMenu = () => setHomeState({ ...homeState, IsAHMOpen: false });
  return (
    <>
      <div style={{ height: "60px", background: "#234" }}></div>
      <Main>
        {homeState.IsAHMOpen ? <AppHeaderMenu closeMenu={closeAHMenu} /> : null}
        <div className="container-home">
          <AppHeader openMenu={openAHMenu} />
          <div className="algs-container">
            {algs.map((item, index) => {
              return (
                <RouletteBox
                  key={index}
                  ns={item.nums.map((item) => item.number)}
                  title={item.name}
                />
              );
            })}
          </div>
        </div>
      </Main>
    </>
  );
};
export default Home;

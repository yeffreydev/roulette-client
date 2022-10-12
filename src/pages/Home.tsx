import react from "react";
import "./../media/css/Home.css";
import Main from "./../components/Main";
import AppHeader from "../components/AppHeader";
import RouletteBox from "../components/RouletteBox";
const rouletteNumbers = [
  { id: 3, value: 9, color: "green" },
  { id: 3, value: 9, color: "red" },
  { id: 3, value: 9, color: "black" },
  { id: 3, value: 9, color: "red" },
  { id: 3, value: 9, color: "black" },
  { id: 3, value: 9, color: "red" },
  { id: 3, value: 9, color: "black" },
  { id: 3, value: 9, color: "red" },
  { id: 3, value: 9, color: "black" },
  { id: 3, value: 9, color: "red" },
  { id: 3, value: 9, color: "black" },
  { id: 3, value: 9, color: "red" },
  { id: 3, value: 9, color: "black" },
];
const Home = () => {
  return (
    <Main>
      <AppHeader />
      <div className="algs-container">
        <RouletteBox ns={rouletteNumbers} title={"hola"} />
        <RouletteBox ns={rouletteNumbers} title={"this is a other algorithm"} />
        <RouletteBox ns={rouletteNumbers} title={"xd this is p"} />
        <RouletteBox ns={rouletteNumbers} title={"like you"} />
        <RouletteBox ns={rouletteNumbers} title={"a need one"} />
        <RouletteBox ns={rouletteNumbers} title={"hola"} />
        <RouletteBox ns={rouletteNumbers} title={"hola"} />
      </div>
    </Main>
  );
};
export default Home;
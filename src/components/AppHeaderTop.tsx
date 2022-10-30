import { FiSettings } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import "./../media/css/AppHeaderTop.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";
const AppHeaderTop = ({
  menuAction,
  isOpen,
}: {
  menuAction: () => void;
  isOpen: boolean;
}) => {
  const { focusRoulette } = useContext(AppContext);
  return (
    <div className="ah-top">
      <div>
        <span>null:</span>
        <span>{focusRoulette ? focusRoulette.name : "null"}</span>
      </div>
      <div>
        <button onClick={menuAction} style={{ cursor: "pointer" }}>
          {isOpen ? <FaTimes /> : <FiSettings />}
        </button>
      </div>
    </div>
  );
};

export default AppHeaderTop;

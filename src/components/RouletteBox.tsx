import { RouletteNumber } from "../utils/rouletteNumbers/types/types";
import ViewOrderNumber from './ViewOrderNumber';
import "./../media/css/RouletteBox.css";
export const RN = ({ n }: { n: RouletteNumber }) => {
  return (
    <div className={`r-n-child r-n-value-${n.color}`}>
      <span>{n.value}</span>
    </div>
  );
};
const RouletteBox = ({
  ns,
  title,
}: {
  ns: RouletteNumber[];
  title: string;
}) => {
  return (
    <div className="r-b-c">
      <div className="r-b-c-head">
        <span>{title}</span>
        <button style={{ color: "#ff5000", fontSize: 15, cursor: "pointer" }}>
          &#9733;
        </button>
      </div>
      <div className="r-b-c-body">
        {ns.map((item, index) => {
          return <RN key={index} n={item} />;
        })}
      </div>
    </div>
  );
};
export default RouletteBox;

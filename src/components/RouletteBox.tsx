import { RouletteNumber } from "../utils/rouletteNumbers/types/types";
import {
  orderRouletteNumbers,
  getNumberFromRoulette,
} from "../utils/rouletteNumbers";
import ViewOrderNumber from "./ViewOrderNumber";
import "./../media/css/RouletteBox.css";
export const RN = ({ n, click }: { n: RouletteNumber; click: () => void }) => {
  return (
    <div onClick={click} className={`r-n-child r-n-value-${n.color}`}>
      <span>{n.value}</span>
    </div>
  );
};
const RouletteBox = ({ ns, title }: { ns: number[]; title: string }) => {
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
          const num = getNumberFromRoulette(item);
          return (
            <RN
              click={() => {}}
              key={index}
              n={num ? num : { id: 0, value: 0, color: "green" }}
            />
          );
        })}
      </div>
      <ViewOrderNumber alg_numbs={ns} numbers={orderRouletteNumbers} />
    </div>
  );
};
export default RouletteBox;

import { RouletteNumber } from "../utils/rouletteNumbers/types/types";
import "./../media/css/RouletteBox.css";
const RN = ({ n }: { n: RouletteNumber }) => {
  return (
    <div className={`r-n-child`}>
      <span className={"r-n-value-" + n.color}>{n.value}</span>
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
        <button>fav</button>
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

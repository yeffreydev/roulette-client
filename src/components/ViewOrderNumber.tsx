import './../media/css/ViewOrderNumber.css';
import {RouletteNumber} from '../utils/rouletteNumbers/types/types';
const ViewOrderNumber = ({numbers}:{numbers: number[]}) => {
	return <div className="c-v-o-n">
	<div className="c-v-o-n-child_1">
		<div>
			<span>0</span>
		</div>
	</div>
	<div className="c-v-o-n-child_2">
		<div className="c-v-o-n-child_2-row-1">

		{
		numbers.map((n,i) => {
		if (n >0&&n<=12){
		return <div key={i}>
			<span>{n}</span>
		</div>
		} else {
		return null;
		}
		})
		}

		</div>
		<div className="c-v-o-n-child_2-row-2">
		{
		numbers.map((n,i) => {
		if (n > 12 && n<=24) {
		return <div key={i}>
			<span>{n}</span>
		</div>
		}else {
		return null
		}
		})
		}
		</div>
		<div className="c-v-o-n-child_3-row-3">
		{
		numbers.map((n,i) => {
		if (n > 24 && n <=36) {
		return <div key={i}>
			<span>{n}</span>
		</div>
		}
		return null;
		})
		}
		</div>
	</div>
	</div>
}

export default ViewOrderNumber;

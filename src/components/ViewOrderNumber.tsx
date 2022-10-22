import './../media/css/ViewOrderNumber.css';
import {RouletteNumber} from '../utils/rouletteNumbers/types/types';
const ViewOrderNumber = ({numbers, alg_numbs}:{numbers:  RouletteNumber[], alg_numbs: number[]}) => {
	return <div className="c-v-o-n">
	<div className="c-v-o-n-child_1">
		<div className="number-v-o-n">
			<span>0</span>
		</div>
	</div>
	<div className="c-v-o-n-child_2">
		<div className="c-v-o-n-child_2-row-1">

		{
		numbers.map((n,i) => {
	/*	if (n.value === 3) 
		{
		return <div className={"number-v-o-n number-v-o-n-"+n.color}>
		<span>{n.value}</span>
		</div>
		}*/
		if (i % 3 ===0 && n.value < 36){
		let num = numbers.find(item => item.value === n.value +3)
		return <div className={"number-v-o-n  number-v-o-n-"+(num ? num.color : '')+(alg_numbs.includes(num?num.value:0)? ' active':'')} key={i}>
			<span>{(num ?num.value : 0)}</span>
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
		if (n.value %3 ===0 && n.value < 36) {
		let num = numbers.find(item => item.value === n.value +2)
		return <div className={"number-v-o-n number-v-o-n-"+(num ? num.color : '')+(alg_numbs.includes(num ? num.value:0)?' active':'')} key={i}>
			<span>{num ? num.value : 0}</span>
		</div>
		}else {
		return null
		}
		})
		}
		</div>
		<div className="c-v-o-n-child_2-row-3">
		{
		numbers.map((n,i) => {
		if (n.value %3 ===0 && n.value < 36) {
		let num = numbers.find(item => item.value === n.value + 1)
		return <div className={"number-v-o-n  number-v-o-n-"+(num ?num.color : '')+(alg_numbs.includes(num ?num.value :0) ? ' active': '')} key={i}>
			<span>{num?num.value : 0}</span>
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

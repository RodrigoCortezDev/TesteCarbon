import React, { useState } from 'react';

var timesReRender = new Proxy(
	{ total: 0 },
	{
		set: (target, property, value) => {
			console.log('>>> SETOU VALOR NO ATRIBUTO', value);
			target['total'] = value;
			return value;
		},
	},
);

console.log('>> passou fora da função');

const Counter = () => {
	const [counter, setCounter] = useState(0);

	timesReRender.total += 1;
	console.log('RENDERIZOU ' + new Date().toLocaleTimeString(), timesReRender.total);

	function add() {
		setCounter(prev => prev + 1);
	}
	function sub() {
		setCounter(prev => prev - 1);
	}

	return (
		<div>
			Total {counter}
			<button onClick={add}>Add</button>
			<button onClick={sub}>Sub</button>
		</div>
	);
};

export default Counter;

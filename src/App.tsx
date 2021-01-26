import React, { useEffect, useState } from 'react';
import './App.scss';
import { DatePicker, DatePickerInput, Loading, ToastNotification } from 'carbon-components-react';
import { GraphiteButton } from './graphite/Button';
import Layout from './components/Layout';
import Counter from './pages/Counter';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	const [expand, setExpand] = useState<boolean>(false);

	useEffect(() => {
		console.log(expand);
	}, [expand]);

	return (
		// <div className="App">
		// 	<header className="App-header">
		<div>
			<Counter />
			{/* <Router>
				<Layout teste="aaa">
					<Switch>
						<Route path="/cortez">
							<h1>cortez</h1>
						</Route>
						<Route path="/counter"></Route>

						<Route path="/home">
							<h1>Welcome to home</h1>
						</Route>

						<Route path="/">
							<h1>renderizando o barra</h1>
						</Route>
					</Switch>
				</Layout>
			</Router> */}
		</div>

		// 		<GraphiteButton
		// 			texto="Clique Aqui Graphite!"
		// 			props={{ 'aria-setsize': 10, 'aria-disabled': true }}
		// 			reference={expand}
		// 			onChangeReference={(ret: boolean) => {
		// 				setExpand(ret);
		// 			}}
		// 		/>

		// 		{expand && <Loading description="Active loading indicator" withOverlay={false} />}

		// 		<ToastNotification
		// 			caption="00:00:00 AM"
		// 			iconDescription="describes the close button"
		// 			subtitle={
		// 				<span>
		// 					Subtitle text goes here. <a href="#example">Example link</a>
		// 				</span>
		// 			}
		// 			timeout={5000}
		// 			title="Notification title"
		// 		/>

		// 		<DatePicker dateFormat="m/d/Y" datePickerType="single">
		// 			<DatePickerInput
		// 				id="date-picker-calendar-id"
		// 				placeholder="mm/dd/yyyy"
		// 				labelText="Date picker label"
		// 				type="text"
		// 			/>
		// 		</DatePicker>
		// 	</header>
		// </div>
	);
}

export default App;

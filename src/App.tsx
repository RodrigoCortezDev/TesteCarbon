import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loading } from 'carbon-components-react';
import { GraphiteButton } from './graphite/Button';
import Layout from './components/Layout';
import Counter from './pages/Counter';

function App() {
	const [expand, setExpand] = useState<boolean>(false);

	useEffect(() => {
		console.log(expand);
	}, [expand]);

	return (
		<Router>
			<Layout teste="aaa">
				<Switch>
					<Route path="/cortez">
						<>
							<GraphiteButton
								texto="Clique Aqui Graphite!"
								props={{ 'aria-setsize': 10, 'aria-disabled': true }}
								reference={expand}
								onChangeReference={(ret: boolean) => {
									setExpand(ret);
								}}
							/>
							{expand && <Loading description="Active loading indicator" withOverlay={false} />}
						</>
					</Route>
					<Route path="/counter">
						<Counter />
					</Route>

					<Route path="/home">
						<h1>Welcome to home</h1>
					</Route>

					<Route path="/">
						<h1>renderizando o barra</h1>
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;
const ContainerContent = styled.div`
	display: flex;
	flex-direction: row;
`;
const SideBar = styled.div`
	width: 10vw;
	background-color: red;
`;
const Content = styled.div`
	width: 90vw;
	height: 90vh;
`;
const Header = styled.div`
	width: 100vw;
	background-color: aliceblue;

	height: 10vh;
`;
const LinkNovo = styled(Link)`
	padding-left: 10px;
`;

interface IProps {
	teste: string;
}

const Layout: React.FC<IProps> = ({ children, teste }) => {
	// const user = window.localStorage.getItem('user');

	// if (!user){
	//   return <Redirect to='login' />
	// }

	return (
		<Container>
			<Header>
				<LinkNovo to="/cortez">Go to Cortez</LinkNovo>
				<LinkNovo to="/home">Go to home</LinkNovo>
				<LinkNovo to="/counter">Go to Counter</LinkNovo>
				<LinkNovo to="/">Go to barra</LinkNovo>
			</Header>
			<ContainerContent>
				<SideBar />
				<Content>{children}</Content>
			</ContainerContent>
		</Container>
	);
};

export default Layout;

import React from 'react';
import { Container, ContainerContent, Content, Header, LinkNovo, SideBar, SideMinha } from './styled';

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
				<SideMinha isFixedNav />
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

import styled from 'styled-components';
import { SideNav } from 'carbon-components-react';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const ContainerContent = styled.div`
	display: flex;
	flex-direction: row;
`;

export const SideBar = styled.div`
	width: 10vw;
	background-color: red;
`;

export const Content = styled.div`
	width: 90vw;
	height: 90vh;
`;

export const Header = styled.div`
	width: 100vw;
	background-color: aliceblue;

	height: 10vh;
`;

export const LinkNovo = styled(Link)`
	padding-left: 10px;
`;

export const SideMinha = styled(SideNav)`
	padding-left: 10px;
`;

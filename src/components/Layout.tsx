import React from 'react';
import { Container } from '../styles/ common';
import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<Container>
			<Outlet />
		</Container>
	);
}

export default Layout;

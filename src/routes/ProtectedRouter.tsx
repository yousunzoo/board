import React, { useEffect } from 'react';
import verifyToken from '../hooks/verifyToken';
import { getCookie } from '../utils/cookies';
import { Outlet, useNavigate } from 'react-router-dom';

function ProtectedRouter() {
	const isAuthenticated = verifyToken();
	const token = getCookie('accessToken');
	const navigate = useNavigate();

	useEffect(() => {
		if (!token || isAuthenticated === 'FAILED') {
			alert('로그인이 필요합니다.');
			navigate('/login');
		}
	}, [isAuthenticated]);
	return <Outlet />;
}

export default ProtectedRouter;

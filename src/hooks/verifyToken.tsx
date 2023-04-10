import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { verify } from '../apis/services/auth';
import { getCookie } from '../utils/cookies';

type authType = 'PENDING' | 'SUCCESS' | 'FAILED';

function verifyToken() {
	const [isAuthenticated, setIsAuthenticated] = useState<authType>('PENDING');
	const verifyResult = useQuery(['auth', 'verify'], verify, {
		onSuccess: () => {
			setIsAuthenticated('SUCCESS');
		},
		onError: () => {
			setIsAuthenticated('FAILED');
		},
		retry: 0, // 실패했더라도 다시 요청하지 않음
		enabled: !!getCookie('accessToken'), // 토큰이 있을 때만 verify
	}); // 쿠키가 없으면 undefined이기 때문에 boolean 타입으로 변환 위해 !! 사용
	return isAuthenticated; // 인증 여부 값을 리턴해서 사용
}

export default verifyToken;

import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { login } from '../apis/services/auth';
import { setCookie } from '../utils/cookies';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
	const navigate = useNavigate();
	const { mutate } = useMutation(login, {
		onSuccess: (data) => {
			setCookie('accessToken', data.accessToken, { path: '/', maxAge: (data.exp = data.iat) });
			navigate('/posts');
		},
		onError: (error: AxiosError) => {
			console.log(error);
			alert('로그인에 실패했습니다.');
		},
	});
	return <LoginForm mutate={mutate} />;
}

export default LoginPage;

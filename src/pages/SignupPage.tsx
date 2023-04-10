import React from 'react';
import SignupForm from '../components/SignupForm';
import { useMutation } from 'react-query';
import { register } from '../apis/services/auth';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

function SignupPage() {
	const navigate = useNavigate();
	const { mutate } = useMutation(register, {
		onSuccess: (data) => {
			navigate('/login');
		},
		onError: (error: AxiosError) => {
			console.log(error);
			alert('회원가입에 실패했습니다. 다른 이메일로 시도해주세요.');
		},
	});
	return <SignupForm mutate={mutate} />;
}

export default SignupPage;

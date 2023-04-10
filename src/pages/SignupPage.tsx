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
		},
	});
	return <SignupForm mutate={mutate} />;
}

export default SignupPage;

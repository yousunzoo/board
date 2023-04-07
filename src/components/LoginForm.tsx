import React, { useState } from 'react';
import * as S from '../styles/Login';
import { HiOutlineUserCircle, HiOutlineLockClosed } from 'react-icons/hi';
import { UseMutateFunction } from 'react-query';
import { AuthResponse, LoginRequest } from '../interfaces/auth';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
	mutate: UseMutateFunction<AuthResponse, AxiosError, LoginRequest>;
}

function LoginForm({ mutate }: LoginFormProps) {
	const [showPw, setShowPw] = useState(false);
	const [user, setUser] = useState<LoginRequest>({ username: '', password: '' });
	const navigate = useNavigate();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutate(user);
	};

	return (
		<S.LoginForm onSubmit={onSubmit}>
			<h1>로그인</h1>
			<S.InputArea>
				<S.InputLabel htmlFor='username'>
					아이디를 입력해주세요.
					<HiOutlineUserCircle />
				</S.InputLabel>
				<S.LoginInput id='username' name='username' onChange={onChange} value={user.username} type='text' placeholder='아이디' required />
			</S.InputArea>

			<S.InputArea>
				<S.InputLabel htmlFor='password'>
					비밀번호를 입력해주세요.
					<HiOutlineLockClosed />
				</S.InputLabel>
				<S.LoginInput id='password' name='password' onChange={onChange} value={user.password} type={showPw ? 'text' : 'password'} placeholder='비밀번호' required />
				<S.ToggleButton
					type='button'
					onClick={() => {
						setShowPw(!showPw);
					}}>
					{showPw ? '숨기기' : '비밀번호 표시'}
				</S.ToggleButton>
			</S.InputArea>
			<S.LoginButton type='submit'>로그인</S.LoginButton>
			<S.SignupButton
				type='button'
				onClick={() => {
					navigate('/register');
				}}>
				회원가입
			</S.SignupButton>
		</S.LoginForm>
	);
}

export default LoginForm;

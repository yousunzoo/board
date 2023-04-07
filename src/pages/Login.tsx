import React, { useState } from 'react';
import * as S from '../styles/Login';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { HiOutlineUserCircle, HiOutlineLockClosed } from 'react-icons/hi';

function Login() {
	const [showPw, setShowPw] = useState(false);
	const onSubmit = () => {};
	return (
		<S.LoginForm onSubmit={onSubmit}>
			<h1>로그인</h1>
			<S.InputArea>
				<S.InputLabel htmlFor='username'>
					아이디를 입력해주세요.
					<HiOutlineUserCircle />
				</S.InputLabel>
				<S.LoginInput id='username' name='username' type='text' placeholder='아이디' required />
			</S.InputArea>

			<S.InputArea>
				<S.InputLabel htmlFor='password'>
					비밀번호를 입력해주세요.
					<HiOutlineLockClosed />
				</S.InputLabel>
				<S.LoginInput id='password' name='password' type={showPw ? 'text' : 'password'} placeholder='비밀번호' required />
				<S.ToggleButton
					type='button'
					onClick={() => {
						setShowPw(!showPw);
					}}>
					{showPw ? '숨기기' : '비밀번호 표시'}
				</S.ToggleButton>
			</S.InputArea>
			<S.LoginButton type='submit'>로그인</S.LoginButton>
			<S.SignupButton type='button'>회원가입</S.SignupButton>
		</S.LoginForm>
	);
}

export default Login;

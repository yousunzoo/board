import React from 'react';
import * as S from '../styles/Signup';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineUserCircle, HiOutlineLockClosed, HiOutlineLockOpen } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
	const navigate = useNavigate();
	return (
		<S.SignupForm>
			<h1>회원가입</h1>
			<S.InputArea>
				<S.Label htmlFor='email'>
					<HiOutlineMail />
					이메일
				</S.Label>
				<S.Input id='email' name='email' placeholder='사용하실 이메일을 작성해주세요.' />
			</S.InputArea>
			<S.InputArea>
				<S.Label htmlFor='username'>
					<HiOutlineUserCircle />
					사용자명
				</S.Label>
				<S.Input id='username' name='username' placeholder='사용하실 아이디를 작성해주세요.' />
			</S.InputArea>
			<S.InputArea>
				<S.Label htmlFor='password'>
					<HiOutlineLockClosed />
					비밀번호
				</S.Label>
				<S.Input id='password' name='password' placeholder='사용하실 비밀번호를 입력해주세요.' />
			</S.InputArea>
			<S.InputArea>
				<S.Label htmlFor='checkPassword'>
					<HiOutlineLockOpen />
					비밀번호 확인
				</S.Label>
				<S.Input id='checkPassword' name='checkPassword' placeholder='비밀번호를 다시 입력해주세요.' />
			</S.InputArea>
			<S.SignupButton>가입하기</S.SignupButton>
			<S.LoginButton
				type='button'
				onClick={() => {
					navigate('/login');
				}}>
				로그인하러 가기
			</S.LoginButton>
		</S.SignupForm>
	);
}

export default SignupForm;

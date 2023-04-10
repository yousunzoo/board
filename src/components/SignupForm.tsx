import React, { useState } from 'react';
import * as S from '../styles/Signup';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineUserCircle, HiOutlineLockClosed, HiOutlineLockOpen } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthResponse, RegisterRequest } from '../interfaces/auth';
import { AxiosError } from 'axios';
import { UseMutateFunction } from 'react-query';

interface SignupFormProps {
	mutate: UseMutateFunction<AuthResponse, AxiosError, RegisterRequest>;
}
function SignupForm({ mutate }: SignupFormProps) {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
		getValues,
	} = useForm();

	return (
		<S.SignupForm
			onSubmit={handleSubmit((data) => {
				const { email, username, password } = data;
				mutate({ email, username, password });
			})}>
			<h1>회원가입</h1>
			<S.InputArea>
				<S.Label htmlFor='email'>
					<HiOutlineMail />
					이메일
				</S.Label>
				<S.Input
					id='email'
					placeholder='사용하실 이메일을 작성해주세요.'
					{...register('email', {
						required: '이메일은 필수 입력 항목입니다.',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: '이메일 형식이 올바르지 않습니다.',
						},
					})}
				/>
			</S.InputArea>
			{errors.email && <S.Error>{errors.email.message}</S.Error>}
			<S.InputArea>
				<S.Label htmlFor='username'>
					<HiOutlineUserCircle />
					사용자명
				</S.Label>
				<S.Input
					id='username'
					placeholder='사용하실 아이디를 작성해주세요.'
					{...register('username', {
						required: '사용자명은 필수 입력 항목입니다.',
					})}
				/>
			</S.InputArea>
			<S.InputArea>
				<S.Label htmlFor='password'>
					<HiOutlineLockClosed />
					비밀번호
				</S.Label>
				<S.Input
					id='password'
					placeholder='사용하실 비밀번호를 입력해주세요.'
					{...register('password', {
						required: '비밀번호는 필수 입력 항목입니다.',
						minLength: {
							value: 8,
							message: '비밀번호는 8자 이상이어야 합니다.',
						},
					})}
				/>
			</S.InputArea>
			{errors.password && <S.Error>{errors.password.message}</S.Error>}
			<S.InputArea>
				<S.Label htmlFor='checkPassword'>
					<HiOutlineLockOpen />
					비밀번호 확인
				</S.Label>
				<S.Input
					id='checkPassword'
					placeholder='비밀번호를 다시 입력해주세요.'
					{...register('passwordConfirm', {
						required: '비밀번호 확인은 필수 입력 항목입니다.',
						validate: {
							check: (value) => {
								if (getValues('password') !== value) {
									return '비밀번호가 일치하지 않습니다.';
								}
							},
						},
					})}
				/>
			</S.InputArea>
			{errors.passwordConfirm && <S.Error>{errors.passwordConfirm.message}</S.Error>}
			<S.SignupButton disabled={isSubmitting}>가입하기</S.SignupButton>
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

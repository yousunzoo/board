import styled from 'styled-components';
export const LoginForm = styled.form`
	width: 400px;
	height: 100%;
	margin: auto;
	padding: 40px 0;
	h1 {
		text-align: center;
		margin-bottom: 40px;
	}
`;

export const InputArea = styled.div`
	display: flex;
	width: 100%;
	height: 54px;
	align-items: center;
	padding: 0 20px;
	border: 1px solid #e1e1e1;
	&:first-of-type {
		border-bottom: none;
	}
`;

export const InputLabel = styled.label`
	width: 24px;
	margin-right: 6px;
	font-size: 0;
	line-height: 0;
	svg {
		width: 24px;
		height: 24px;
		color: #aaa;
	}
`;
export const LoginInput = styled.input`
	font-size: 16px;
	height: 40px;
	flex: 1;
	border: none;
	&:focus {
		outline: none;
	}
`;
export const ToggleButton = styled.button`
	font-size: 12px;
	text-decoration: underline;
`;

export const LoginButton = styled.button`
	width: 100%;
	height: 60px;
	font-size: 24px;
	border-radius: 20px;
	background-color: #1d47a1;
	color: #fff;
	margin-top: 40px;
	margin-bottom: 20px;
`;

export const SignupButton = styled(LoginButton)`
	border: 4px solid #1d47a1;
	background-color: transparent;
	color: #333;
	margin-top: 0;
`;

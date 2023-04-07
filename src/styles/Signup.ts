import styled from 'styled-components';
export const SignupForm = styled.form`
	width: 400px;
	height: 100%;
	margin: auto;
	padding: 20px 0;
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
	&:not(:last-of-type) {
		border-bottom: none;
	}
`;

export const Label = styled.label`
	margin-right: 10px;
	display: flex;
	height: 100%;
	align-items: center;
	svg {
		width: 24px;
		height: 24px;
		color: #aaa;
		margin-right: 6px;
	}
`;
export const Input = styled.input`
	flex: 1;
	border: none;
	font-size: 15px;
	&:focus {
		outline: none;
	}
`;

export const SignupButton = styled.button`
	width: 100%;
	height: 50px;
	margin-top: 30px;
	border-radius: 10px;
	background-color: #1d47a1;
	color: white;
`;

export const LoginButton = styled(SignupButton)`
	background-color: transparent;
	border: 4px solid #1d47a1;
	color: #333;
	margin-top: 10px;
`;

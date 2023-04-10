import { RegisterRequest, UserPayload } from '../../interfaces/auth';
import { AuthResponse, LoginRequest } from '../../interfaces/auth';
import { axiosInstance } from '../axios';

export const login = async (user: LoginRequest) => {
	const { data } = await axiosInstance.post<AuthResponse>('api/auth/login', user);
	return data;
};

export const register = async (user: RegisterRequest) => {
	const { data } = await axiosInstance.post<AuthResponse>('api/auth/register', user);
	return data;
};

export const verify = async () => {
	const { data } = await axiosInstance.get<UserPayload>('api/auth/verify');
	return data;
};

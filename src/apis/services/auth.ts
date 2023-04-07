import { UserPayload } from '../../interfaces/auth';
import { AuthResponse, LoginRequest } from '../../interfaces/auth';
import { axiosInstance } from '../axios';

export const login = async (user: LoginRequest) => {
	try {
		const { data } = await axiosInstance.post<AuthResponse>('/auth/login', user);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const register = async (user: LoginRequest) => {
	try {
		const { data } = await axiosInstance.post<AuthResponse>('/auth/register', user);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const verify = async () => {
	try {
		const { data } = await axiosInstance.get<UserPayload>('/api/auth/verify');
		return data;
	} catch (error) {
		console.log(error);
	}
};

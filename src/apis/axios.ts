import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getCookie } from '../utils/cookies';

const getAxiosInstance = () => {
	const config: AxiosRequestConfig = {
		baseURL: import.meta.env.VITE_SERVER_URL,
		headers: {
			'Content-type': 'application/json',
		},
		withCredentials: true,
	};
	const instance = axios.create(config);
	instance.defaults.timeout = 3000;
	instance.interceptors.request.use(
		(request) => {
			const token = getCookie('accessToken');
			if (token) request.headers['Authorization'] = `Bearer ${token}`;
			return request;
		},
		(error: AxiosError) => {
			return Promise.reject(error);
		}
	);
	return instance;
};

export const axiosInstance = getAxiosInstance();

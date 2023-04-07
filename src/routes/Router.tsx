import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<div>Home</div>} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<SignupPage />} />
					<Route path='/posts' element={<div>posts</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;

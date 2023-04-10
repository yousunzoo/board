import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import PostsPage from '../pages/PostsPage';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<div>Home</div>} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<SignupPage />} />
					<Route path='/posts' element={<PostsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;

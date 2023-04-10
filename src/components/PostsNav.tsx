import React from 'react';
import * as S from '../styles/Posts';
import { useNavigate } from 'react-router-dom';
function PostsNav() {
	const navigate = useNavigate();

	const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) return;

		const target = e.target as HTMLElement;
		const targetText = target.innerText;
		if (targetText === '내 포스팅') {
			navigate('/posts/myposts');
		} else if (targetText === '글 작성하기') {
			navigate('/posts/write');
		}
	};
	return (
		<S.NavContainer>
			<S.LeftNav></S.LeftNav>
			<S.RightNav onClick={handleNavClick}>
				<S.NavItem>내 포스팅</S.NavItem>
				<S.NavItem>글 작성하기</S.NavItem>
			</S.RightNav>
		</S.NavContainer>
	);
}

export default PostsNav;

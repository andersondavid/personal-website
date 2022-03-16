import Image from 'next/image'
import styled from 'styled-components'

import logo from '../../../public/images/david.svg'

const HeaderTag = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	z-index: 1000;
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 1;
`

const LogoContainer = styled.div`
	padding: 16.5px;
`

const LogoIcon = styled(Image)`
	height: 100%;
`

const SocialLinksList = styled.ul`
	list-style: none;
	li {
		display: inline-block;
		height: 65px;
		line-height: 65px;
		padding: 0 15px;
		color: #ffffff;
		transition: 0.3s;
		text-transform: uppercase;
		&:hover {
			background-color: rgb(255, 255, 255, 0.1);
		}
	}
`

export default function Header() {
	return (
		<HeaderTag>
			<LogoContainer>
				<LogoIcon src={logo} height={'32px'} width={'32px'} />
			</LogoContainer>
			<nav>
				<SocialLinksList>
					<a href="">
						<li>Instagram</li>
					</a>
					<a href="">
						<li>Pinterest</li>
					</a>
					<a href="">
						<li>LinkedIN</li>
					</a>
				</SocialLinksList>
			</nav>
		</HeaderTag>
	)
}

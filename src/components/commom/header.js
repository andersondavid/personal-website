import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'

import logo from '../../../public/images/david.svg'
import menuBtn from '../../../public/images/icons/menu.svg'

const HeaderTag = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	z-index: 1000;
	position: relative;
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 1;
	&::before {
		content: '';
		height: 1px;
		width: 100%;
		background: ${props => props.theme.lines};
		position: absolute;
		bottom: 0;
	}
	@media (max-width: 500px) {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 1;
		grid-row-end: 1;
	}
`

const LogoContainer = styled.div`
	padding: 16.5px;
`

const HeaderIcons = styled(Image)`
	height: 100%;
`

const MenuBtnContainer = styled.div`
	padding: 16.5px;
	@media (min-width: 500px) {
		display: none;
	}
`

const NavBar = styled.nav`
	transition: 0.3s;
	@media (max-width: 500px) {
		position: absolute;
		top: ${props => props.linksOpen ? '64px' : '-220px'};
		right: 0;
`

const SocialLinksList = styled.ul`
	list-style: none;
	display: inline-block;
	background: ${props => props.theme.bg};
	@media (max-width: 500px) {
		border: solid 1px ${props => props.theme.lines};
		background: ${props => props.theme.bg};
		display: block;
	}
	li {
		height: 65px;
		transition: 0.3s;
		text-transform: uppercase;
		font-family: 'Raleway',sans-serif;
		display: inherit;
	}
	a {
		color: ${props => props.theme.textPrimary};
		text-decoration: none;
		line-height: 65px;
		padding: 15px;
		margin-right: 15px;
	}
	li:hover {
		background-color: ${props => props.theme.bgLight};
	}
	`

export default function Header() {
	const [linksOpen, setLinksOpen] = useState(false)

	return (
		<HeaderTag>
			<LogoContainer>
				<HeaderIcons src={logo} height='32px' width='32px' />
			</LogoContainer>
			<MenuBtnContainer onClick={() => setLinksOpen(!linksOpen)} >
				<HeaderIcons src={menuBtn} height='32px' width='32px' />
			</MenuBtnContainer>
			<NavBar linksOpen={linksOpen}>
				<SocialLinksList>
					<li>
						<a href='//github.com/andersondavid'>github</a>
					</li>
					
					<li>
						<a href='//www.linkedin.com/in/anderson-david-349b18187'>linkedin</a>
					</li>
					
					<li>
						<a href='//pinterest.com/ndersondavid/'>pinterest</a>
					</li>
				</SocialLinksList>
			</NavBar>
		</HeaderTag>
	)
}

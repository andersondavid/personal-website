import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
// icons
import home from '../../../public/images/icons/home.svg'
import person from '../../../public/images/icons/person.svg'
import code from '../../../public/images/icons/code.svg'
import github from '../../../public/images/icons/github.svg'

const Aside = styled.aside`
	grid-column-start: 2;
	grid-column-end: 3;
	grid-row-start: 1;
	grid-row-end: 3;
	position: relative;
	border-left: solid ${(props) => props.theme.lines} 1px;
	@media (max-width: 500px) {
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 3;
		grid-row-end: 3;
		border-top: solid ${(props) => props.theme.lines} 1px;
		border-left: none;
	}
`

const PagesLinksList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	align-items: center;
	@media (max-width: 500px) {
		flex-direction: row;
		justify-content: space-evenly;
	}
`

const PagesLinksItems = styled.li`
	cursor: pointer;
	margin: 15px 0;
	padding: 10px;
	border-radius: 50%;
	height: 52px;
	width: 52px;
	transition: 0.3s;
	background: ${(props) => (props.isActive ? props.theme.bgLight : 'initial')};
	a {
		pointer-events: ${(props) => (props.isActive ? 'none' : 'auto')};
	}
	&:hover {
		background: ${(props) => props.theme.bgLight};
	}
	@media (max-width: 500px) {
		height: 42px;
		width: 42px;
	}
`

export default function SideBar() {
	const router = useRouter()

	const isActive = (href) => href === router.pathname

	return (
		<Aside>
			<PagesLinksList>
				<PagesLinksItems isActive={isActive('/')}>
					<Link href="/">
						<a>
							<Image src={home} alt="" />
						</a>
					</Link>
				</PagesLinksItems>

				<PagesLinksItems isActive={isActive('/github')}>
					<Link href="/github">
						<a disable="true">
							<Image src={github} alt="" />
						</a>
					</Link>
				</PagesLinksItems>

				<PagesLinksItems isActive={isActive('/aboutme')}>
					<Link href="/aboutme">
						<a>
							<Image src={person} alt="" />
						</a>
					</Link>
				</PagesLinksItems>

				<PagesLinksItems isActive={isActive('/thissite')}>
					<Link href="/thissite">
						<a>
							<Image src={code} alt="" />
						</a>
					</Link>
				</PagesLinksItems>
			</PagesLinksList>
		</Aside>
	)
}

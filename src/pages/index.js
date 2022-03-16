import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/commom/header'
import SideBar from '../components/commom/sidebar'
import Start from '../sections/start'
// sections

const GlobalStyle = createGlobalStyle`
	body {
		background: #111115;
		font-family: 'Raleway', sans-serif;
	}
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
`

const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: auto 65px;
	grid-template-rows: 65px auto;
	height: 100vh;
`
const Main = styled.main`
	width: 100%;
	height: 100%;
`

export default function Home() {
	return (
		<MainWrapper>
			<GlobalStyle />
			<Header />
			<SideBar />
			<Main>
				<Start />
			</Main>
		</MainWrapper>
	)
}

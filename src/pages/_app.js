import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'

import Header from '../components/commom/header'
import SideBar from '../components/commom/sidebar'
import Transition from './_transition'

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
	overflow: hidden;
`
const Main = styled.main`
	width: 100%;
	height: 100%;
	position: relative;
`

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {

	return (
		<>
			<Head>
				<title>My new cool app</title>
			</Head>
			<GlobalStyle />
			<MainWrapper>
				<Header />
				<SideBar />
				<Main>
					<Transition>
						<Component {...pageProps} />
					</Transition>
				</Main>
			</MainWrapper>
		</>
	)
}

export default MyApp

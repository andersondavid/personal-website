import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Header from '../components/commom/header'
import SideBar from '../components/commom/sidebar'
import Transition from './_transition'

const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: auto 65px;
	grid-template-rows: 65px auto;
	height: 100vh;
	transition: 0.5s;
	@media (max-width: 500px) {
		grid-template-columns: auto;
		grid-template-rows: 65px auto 65px;
	}
`
const Main = styled.main`
	width: 100%;
	overflow-x: hidden;
	height: 100%;
	position: relative;
`

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
	const router = useRouter()
	const mainRef = useRef()

	useEffect(() => {
		mainRef.current.scrollTop = 0
	}, [router.pathname])

	return (
		<>
			<ThemeProvider theme={theme}>
				<Head>
					<title>Anderson David SF | WebDesigner</title>
				</Head>
				<GlobalStyle />
				<MainWrapper>
					<Header />
					<SideBar />
					<Main ref={mainRef}>
						<Transition>
							<Component {...pageProps} />
						</Transition>
					</Main>
				</MainWrapper>
			</ThemeProvider>
		</>
	)
}

export default MyApp

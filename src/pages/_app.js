import Head from 'next/head'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>My new cool app</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

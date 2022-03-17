import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

let TRANSITION_TIME_SEC = 0.5
let ALLOW_NEW_PAGES = false
let IS_LOADING_NEW_PAGE = false
let CURRENT_PATH = ''

const TRANSITION_DEFAULT_CONFIG = {
	transitionTime: '0',
	pageLoaderPos: '-125%',
}

const PageLoader = styled.div`
	height: 100%;
	width: 100%;
	top: 0;
	position: absolute;
	right: ${(props) => props.loaderConfig.pageLoaderPos};
	transition: ${(props) => props.loaderConfig.transitionTime};
	background: green;
`
// eslint-disable-next-line react/prop-types
function Transition({ children }) {
	const [currentPage, setCurrentPage] = useState(children)
	const [nextPage, setNextPage] = useState(null)
	const [loaderConfig, setLoaderConfig] = useState(TRANSITION_DEFAULT_CONFIG)
	const router = useRouter()
	useEffect(() => {
		console.log(router.pathname)
		// eslint-disable-next-line react/prop-types
		if (
			ALLOW_NEW_PAGES &&
			!IS_LOADING_NEW_PAGE &&
			router.pathname !== CURRENT_PATH
		) {
			IS_LOADING_NEW_PAGE = true
			setNextPage(children)
			setLoaderConfig({
				transitionTime: TRANSITION_TIME_SEC + 's',
				pageLoaderPos: '0',
			})
		} else if (!ALLOW_NEW_PAGES) {
			setCurrentPage(children)
			ALLOW_NEW_PAGES = true
		}

		CURRENT_PATH = router.pathname
	}, [children])

	const changeCurrentPage = () => {
		setCurrentPage(children)
		setNextPage(null)
		IS_LOADING_NEW_PAGE = false
		setLoaderConfig(TRANSITION_DEFAULT_CONFIG)
	}

	return (
		<>
			{currentPage}
			<PageLoader
				loaderConfig={loaderConfig}
				onTransitionEnd={changeCurrentPage}
			>
				{nextPage}
			</PageLoader>
		</>
	)
}

export default Transition

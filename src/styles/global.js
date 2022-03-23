import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	body {
		background: ${props => props.theme.bg};
		font-family: ${props => props.theme.fontGlobal};
		color: ${props => props.theme.textPrimary}
	}
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	a {
		color: ${props => props.theme.colors.blue};
		text-decoration: none;
	}
	::-webkit-scrollbar-track {
		background-color: ${props => props.theme.colors.grayDark};
	}
	::-webkit-scrollbar {
		width: 8px;
		@media (max-width: 500px) {
			width: 3px
		}
	}
	::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.colors.gray};
		border-radius: 10px;
	}
`

export default GlobalStyle

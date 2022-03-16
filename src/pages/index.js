import { createGlobalStyle } from 'styled-components'
import HeaderComponent from '../components/commom/headercomponent'
// sections

const GlobalStyle = createGlobalStyle`
	body {
		background: #111133;
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
export default function Home() {
	return (
		<div>
			<GlobalStyle />
			<HeaderComponent />
		</div>
	)
}

import styled from 'styled-components'

const Title = styled.h1`
	margin: 0 15px;
	font-family: ${(props) => props.theme.fontHeaders};
	font-weight: normal;
	font-size: 7em;
	@media (max-width: 500px) {
		font-size: 4em;
	}
`

function BigTitle() {
	return <Title>Hello, Im Desiger.</Title>
}

export default BigTitle


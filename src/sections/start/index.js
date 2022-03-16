import styled from 'styled-components'

const StartSection = styled.section`
	background-color: #ba181b;
	height: 100%;
	width: 100%;
	padding: 30px;
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 2;
	grid-row-end: 2;
`
const AboutContainer = styled.article`
	transform: translateY(-50%);
	position: relative;
	top: 50%;
	width: 33%;
	h1 {
		color: #ffffff;
		font-size: 1.8em;
	}
`
const JobsText = styled.p`
	color: #ffffff;
	font-size: 1.2em;
	font-family: fantasy;
	margin: 5px 0;
	text-transform: uppercase;
`

const AboutText = styled.p`
	text-align: justify;
	color: #ffffff;
`

export default function Start() {
	return (
		<StartSection>
			<AboutContainer>
				<h1>Anderson David SF</h1>
				<JobsText>Fronted | Next.js | ReactJS</JobsText>
				<AboutText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet
					turpis justo. Maecenas laoreet ullamcorper risus vel vestibulum. In
					hac habitasse platea dictumst. Proin non magna sodales, ultrices sem
					in, ultrices est. Etiam mollis aliquet nunc, efficitur fermentum nunc.
					Morbi laoreet luctus dui, a cursus sapien tempor nec.
				</AboutText>
			</AboutContainer>
		</StartSection>
	)
}

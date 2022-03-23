import styled from 'styled-components'

const Page = styled.div`
	width: 100%;
	height: 100%;
	background: ${(props) => props.theme.bg};
	max-width: 1280px;
	margin: 0 auto;
`

const Section = styled.section`
	position: relative;
	height: 100%;
`

const Article = styled.article`
	padding: 30px 15px;
	max-width: 400px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`

const Title = styled.h1`
	margin: 0 15px;
	font-family: ${props => props.theme.fontHeaders};
	font-weight: normal;
	font-size: 1.8em;
`

const JobsText = styled.p`
	color: ${props => props.theme.textSecondary};
	font-size: 1.4em;
	font-family: ${(props) => props.theme.fontHeaders};
	font-weight: normal;
	margin: 5px 0;
	text-transform: uppercase;
  display: flex;
	padding: 0 15px;
	justify-content: space-between;
`

const Paragraph = styled.p`
	text-align: justify;
	padding: 0 15px;
`

export default function Home() {
	return (
		<Page>
			<Section>
				<Article>
					<Title>Anderson David SF</Title>
					<JobsText><span>Fronted</span><span>Next.js</span><span>ReactJS</span><span>WebDesign</span></JobsText>
					<Paragraph>
						Estudo programação desde 2013 quando iniciei com HTML e CSS básico.
						Ja passei por GDScript, Python, PHP e C+ mas foi no JavaScript que 
						me encontrei e permaneço ate hoje. Tenho conhecimentos avançados em 
						JS basico, ReactJS e Next.js, um pouco de backend com NodeJS e estudo TypeScript.
					</Paragraph>
				</Article>
			</Section>
		</Page>
	)
}

import styled from 'styled-components'

import BigTitle from '../components/commom/bigtitle'

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
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	@media (min-width: 500px) {
		right: 10%;
		width: 40%;
	}
`

const JobsText = styled.p`
	color: ${(props) => props.theme.textSecondary};
	font-size: 1.4em;
	font-family: ${(props) => props.theme.fontHeaders};
	font-weight: normal;
	margin: 5px 0;
	text-transform: uppercase;
	display: flex;
	padding: 0 15px;
	justify-content: space-between;
	@media (max-width: 500px) {
		font-size: 1em;
	}
`

export default function Home() {
	return (
		<Page>
			<Section>
				<Article>
					<BigTitle />
					<JobsText>
						<span>Fronted</span>
						<span>Next.js</span>
						<span>ReactJS</span>
						<span>WebDesign</span>
					</JobsText>
				</Article>
			</Section>
		</Page>
	)
}


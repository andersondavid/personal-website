import styled from 'styled-components'
import Image from 'next/image'

import githubIcon from '../../public/images/icons/github.svg'
import fetchGithub from '../lib/fetch-github'

const langColor = ({ languague }) => {
	const colors = {
		js: '#f1e05a',
		css: '#563d7c',
		gd: '#355570',
	}

	switch (languague) {
	case 'JavaScript':
		return colors.js
	case 'GDScript':
		return colors.gd
	case 'CSS':
		return colors.css
	default:
		return '#4455ef'
	}
}

const Page = styled.div`
	width: 100%;
	height: 100%;
	background: ${(props) => props.theme.bg};
	max-width: 1280px;
	margin: 0 auto;
`

const Section = styled.section`
	position: relative;
	@media (max-width: 500px) {
		transform: none;
		top: 0;
	}
`

const Article = styled.article`
	padding: 30px 15px;
	display: inline-block;
	width: calc(100% - 250px);
	@media (max-width: 780px) {
		width: 100%;
	}
`

const BigIcon = styled.div`
	height: 250px;
	width: 250px;
	margin-top: 100px;
	float: left;
	position: relative;
	display: inline-block;
	@media (max-width: 780px) {
		display: none;
	}
`

const Title = styled.h1`
	margin: 15px;
	font-family: ${(props) => props.theme.fontHeaders};
	font-weight: normal;
	font-size: 1.8em;
`

const ListContainer = styled.ul`
	display: flex;
	display: flex;
	flex-wrap: wrap;
	padding: 5px;
`

const RepoItem = styled.li`
	padding: 5px;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 120px;
	@media (min-width: 500px) {
		width: 49.99999%;
	}
`
const RepoBox = styled.div`
	border: 1px solid ${(props) => props.theme.bgLight};
	border-radius: 5px;
	width: 100%;
	padding: 10px 8px;
	display: flex;
	font-family: monospace;
	flex-direction: column;
	a {
		color: ${(props) => props.theme.colors.blue};
		font-size: 1.1em
	}
	p {
		font-size: 0.8em;
		margin: 8px 0;
		flex: 1 0 auto;
		font-family: ${props => props.theme.fontGlobal};
	}
`

const LanguagueSpan = styled.span`
	position: relative;
	padding-left: 15px;
	&::before {
		content: '';
		height: 12px;
		width: 12px;
		border-radius: 50%;
		display: block;
		background: ${(props) => langColor(props)};
		position: absolute;
		top: 2px;
		left: 0px;
	}
`

export default function Github({ githubData }) {
	return (
		<Page>
			<Section>
				<BigIcon>
					<Image src={githubIcon} alt="" layout="fill" />
				</BigIcon>
				<Article>
					<Title>Repositórios</Title>
					<ListContainer>
						{githubData.map((item) => (
							<RepoItem key={item.id}>
								<RepoBox>
									<a href={item.html_url}>{item.name}</a>
									<p>{item.description}</p>
									<LanguagueSpan languague={item.languague}>
										{item.languague}
									</LanguagueSpan>
								</RepoBox>
							</RepoItem>
						))}
					</ListContainer>
				</Article>
			</Section>
		</Page>
	)
}

export async function getServerSideProps() {
	const githubData = await fetchGithub()
	return { props: { githubData } }
}

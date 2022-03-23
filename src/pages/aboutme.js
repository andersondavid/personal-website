import styled from 'styled-components'
import Image from 'next/image'

import person from '../../public/images/icons/person.svg'

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
`
const HalfArticle = styled(Article)`
	display: inline-block
`

const Title = styled.h1`
	margin: 15px;
	font-family: ${props => props.theme.fontHeaders};
	font-weight: normal;
	font-size: 1.8em;
`

const SkillList = styled.ul`
	width: 50%;
	display: inline-block;
	padding: 0 15px;
	list-style: none;
	@media (max-width: 500px) {
		width: 100%;
		display: block;
	}
`

const Skill = styled.li`
	h3 {
		font-size: 1.2em;
		font-weight: normal;
	}
`

const ProgressBar = styled.div`
	height: 15px;
	width: 100%;
	position: relative;
	background: ${(props) => props.theme.colors.gray};
	margin: 5px 0 10px 0;
	&::after {
		content: '';
		position: absolute;
		height: 15px;
		background: ${(props) => props.theme.colors.green};
		width: ${(props) => props.progress}%;
	}
	&::before {
		content: '${(props) => props.progress}%';
		position: absolute;
		font-size: 1.2em;
		top: calc(-1.2em - 5px);
		right: 0;
	}
`

const SecondTitle = styled(Title)`
	font-size: 1.5em;
`

const ExtraText = styled.ul`
	margin: 15px 35px;
`

const ExtraItem = styled.li`
	margin: 5px 0;
`

const BigIcon = styled.div`
	height: 250px;
	width: 250px;
	display: inline-block;
	@media(max-width: 780px){
		display: none;
	}
`

export default function About() {
	return (
		<Page>
			<Section>
				<Article>
					<Title>Habilidades</Title>
					<SkillList>
						<Skill>
							<h3>Web Development</h3>
							<ProgressBar progress={'95'} />
						</Skill>
						<Skill>
							<h3>ReactJS</h3>
							<ProgressBar progress={'70'} />
						</Skill>
						<Skill>
							<h3>Next.js</h3>
							<ProgressBar progress={'85'} />
						</Skill>
						<Skill>
							<h3>Styled Components</h3>
							<ProgressBar progress={'60'} />
						</Skill>
					</SkillList>
					<SkillList>
						<Skill>
							<h3>NodeJS</h3>
							<ProgressBar progress={'30'} />
						</Skill>
						<Skill>
							<h3>Design Gráfico</h3>
							<ProgressBar progress={'65'} />
						</Skill>
						<Skill>
							<h3>Organização</h3>
							<ProgressBar progress={'95'} />
						</Skill>
						<Skill>
							<h3>Resolução de Problemas</h3>
							<ProgressBar progress={'90'} />
						</Skill>
					</SkillList>
				</Article>
				<BigIcon>
					<Image src={person} alt='' />
				</BigIcon>
				<HalfArticle>
					<SecondTitle>Extras e Diferenciais</SecondTitle>
					<ExtraText>
						<ExtraItem>Ingês basico</ExtraItem>
						<ExtraItem>Design gráfico</ExtraItem>
						<ExtraItem>Experiencia basica com SQL</ExtraItem>
						<ExtraItem>Experiencia basica com NoSQL (MongoDB)</ExtraItem>
						<ExtraItem>Boas praticas</ExtraItem>
						<ExtraItem>Estudante de TypeScript em progresso</ExtraItem>
						<ExtraItem>Tecnico em Informatica Avançada</ExtraItem>
						<ExtraItem>Conhecimentos sobre Windows e Linux</ExtraItem>
					</ExtraText>
				</HalfArticle>
			</Section>
		</Page>
	)
}

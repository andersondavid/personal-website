import styled from 'styled-components'
import Image from 'next/image'

import codeIcon from '../../public/images/icons/code.svg'

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
	display: inline-block;
	width: 50%;
	@media(max-width: 780px){
		width: 100%
	}
`

const BigIcon = styled.div`
	height: 250px;
	width: 250px;
	float: right;
	margin: 30px;
	position: relative;
	display: inline-block;
	@media(max-width: 780px){
		display: none;
	}
`

const ArticleDev = styled(Article)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
		@media (max-width: 500px) {
			flex-direction: column
		}
`

const Title = styled.h1`
	margin: 15px;
	font-family: ${props => props.theme.fontHeaders};
	font-weight: normal;
	font-size: 1.8em;
`

const SecondTitle = styled(Title)`
	font-size: 1.5em;
`

const Paragraph = styled.p`
	text-align: justify;
	color: ${(props) => props.theme.textPrimary};
	padding: 5px 15px;
`
const ToolsList = styled.ul`
	margin: 15px 30px;
`

const ToolItem = styled.li`
	margin: 5px 0
`

const ToolName = styled.span`
	font-weight: bold;
`

const DependenciesList = styled.ul`
	color: ${(props) => props.theme.textSecondary};
	font-size: 1em;
	font-weight: normal;
	margin: 15px 35px;
	list-style: none;
	font-family: consolas;
`

const Dependency = styled.li`
	margin: 5px 20px;
`

const JsonKey = styled.span`
	color: ${(props) => props.theme.colors.green};
`

const JsonValue = styled.span`
	color: ${(props) => props.theme.colors.blue};
`

export default function Site() {
	return (
		<Page>
			<Section>
			
				<BigIcon>
					<Image src={codeIcon} alt='' layout='fill' />
				</BigIcon>
				<HalfArticle>
					<Title>A Construção Desse Site</Title>
					<Paragraph>
						Este website é um pegueno projeto para expor meus conhecimentos na
						area.
					</Paragraph>
					<Paragraph>
						Optei por utilizar o minino possivel de libs externas e priorizar minhas proprias
						habilidades.
					</Paragraph>
				</HalfArticle>
				<Article>
					<SecondTitle>
						Ferramentas
					</SecondTitle>
					<ToolsList>
						<ToolItem>
							<ToolName>Corel Draw 2021:</ToolName> Para prototipação e icones do site.
						</ToolItem>
						<ToolItem>
							<ToolName>Git:</ToolName> Para versionamento do código.
						</ToolItem>
						<ToolItem>
							<ToolName>Vim:</ToolName> Para edição de texto.
						</ToolItem>
						<ToolItem>
							<ToolName>Visual Studio Code:</ToolName> Também para edição de texto.
						</ToolItem>
					</ToolsList>
				</Article>
				<ArticleDev>
					<div>
						<SecondTitle>Dependencias</SecondTitle>
						<DependenciesList>
							&#123;
							<Dependency>
								<JsonKey>&#34;next&#34;</JsonKey>:{' '}
								<JsonValue>&#34;12.1.0&#34;</JsonValue>,
							</Dependency>
							<Dependency>
								<JsonKey>&#34;react&#34;</JsonKey>:{' '}
								<JsonValue>&#34;17.0.2&#34;</JsonValue>,
							</Dependency>
							<Dependency>
								<JsonKey>&#34;react-dom&#34;</JsonKey>:{' '}
								<JsonValue>&#34;17.0.2&#34;</JsonValue>,
							</Dependency>
							<Dependency>
								<JsonKey>&#34;styled-components&#34;</JsonKey>:{' '}
								<JsonValue>&#34;^5.3.3&#34;</JsonValue>
							</Dependency>
							&#125;
						</DependenciesList>
					</div>
					<div>
						<SecondTitle>Dependencias de Desenvolvimento</SecondTitle>
						<DependenciesList>
							&#123;
							<Dependency>
								<JsonKey>&#34;eslint&#34;</JsonKey>:{' '}
								<JsonValue>&#34;8.11.0&#34;</JsonValue>,
							</Dependency>
							<Dependency>
								<JsonKey>&#34;eslint-config-next&#34;</JsonKey>:{' '}
								<JsonValue>&#34;12.1.0&#34;</JsonValue>,
							</Dependency>
							<Dependency>
								<JsonKey>&#34;eslint-plugin-react&#34;</JsonKey>:{' '}
								<JsonValue>&#34;^7.29.4&#34;</JsonValue>,
							</Dependency>
							&#125;
						</DependenciesList>
					</div>
				</ArticleDev>
			</Section>
		</Page>
	)
}

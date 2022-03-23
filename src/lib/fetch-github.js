const fetchGithub = async () => {
	const res = await fetch('https://api.github.com/users/andersondavid/repos')
	const data = await res.json()
	const filterData = data.map(info => {
		return {
			description: info.description,
			html_url: info.html_url,
			name: info.name,
			languague: info.language,
			id: info.id
		}
	})



	
	return filterData
}

export default fetchGithub

async function isForked(username) {
	const apiUrl = `https://api.github.com/repos/hakisolos/nikka-md/forks`;
	const response = await fetch(apiUrl);
	if (!response.ok) return false;

	const forks = await response.json();
	const filteredForks = forks.filter(fork => fork.owner.login !== 'nikka');
	return filteredForks.some(fork => fork.owner.login === username);
}

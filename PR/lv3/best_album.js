function solution(genres, plays) {
	const answer = [];
	const songInfo = {};
	const genreInfo = {};

	for (let i = 0; i < genres.length; i++) {
		if (songInfo[genres[i]])
			songInfo[genres[i]].push({ id: i, play: plays[i] });
		else songInfo[genres[i]] = [{ id: i, play: plays[i] }];

		if (genreInfo[genres[i]]) genreInfo[genres[i]] += plays[i];
		else genreInfo[genres[i]] = plays[i];
	}

	for (let i = 0; i < Object.keys(songInfo).length; i++) {
		songInfo[Object.keys(songInfo)[i]] = songInfo[
			Object.keys(songInfo)[i]
		].sort((a, b) => {
			if (a.play !== b.play) return a.play - b.play;
			else return b.id - a.id;
		});
	}

	const genreArr = Array.from(Object.entries(genreInfo)).sort(
		(a, b) => a[1] - b[1]
	);

	for (let i = 0; i < genreArr.length; i++) {
		const lastGenreInfo = genreArr[genreArr.length - 1 - i];
		const genre = lastGenreInfo[0];

		for (let j = 0; j < 2; j++) {
			const arr = songInfo[genre];
			if (arr.length !== 0) {
				const info = arr.pop();
				answer.push(info.id);
			}
		}
	}

	return answer;
}

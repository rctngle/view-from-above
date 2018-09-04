fetch('http://localhost:3000/', {
	method: 'get'
}).then((response) => {
	return response.json();
}).then(function(data) {

	data.murders.forEach((murder) => {
		const element = document.createElement('div');
		element.className = 'murder';
		console.log(murder);
		let age = '';
		if(murder.age !== null){
			age = murder.age;
		}
		element.innerHTML = `
			<div class="inner">
				<div class="date">${murder.date}</div>
				<div class="victim">${murder.victim}</div>
				<div>${murder.municipality}</div>
				<div>${murder.conflict}</div>
				<div>aged ${age}</div>
			</div>
		`;
		document.querySelector('#murders').append(element);
	})

}).catch((err) => {
	console.error(err)
});

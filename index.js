const random = (options) => {
	const element = document.querySelectorAll('r-name');

	element.forEach(item => {
		item.innerHTML = 'Ros';
	});
};

module.exports.random = random;



module.exports = {
	sayName: sayMyName
}

function sayMyName(name, surname) {
	if (!name || !surname) {
		return false;
	} else {
		return (name + ' ' + surname);
	}
}

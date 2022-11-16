// зачем тогда вообще if? year % 4 === 0 && year % 100 !== 0 && year % 400 === 0 - само по себе вернёт true / false.
function isLeap(year) {
	if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
		return true;
	}else {
		return false;
	}
} module.exports = isLeap;
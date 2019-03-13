import * as types from '../constants';

const initState = {
	dates: [],
	active: {},
	today: new Date(),
	dishes: []
};

const home = (state = initState, action) => {
	switch (action.type) {
		case types.SELECT_DATE:
			return {
				...state,
				active: state.dates[action.selDate].date
			};

		case types.SET_INIT:
			let buff = [];
			for (let b = 0; b < 7; b++) {
				const d = new Date();
				const tmp = {
					date: addDays(d, b),
					dd: d.getDate(),
					dayName: getDayName(d),
					monthName: getMonthName(d)
				};
				buff = [...buff, tmp];
			}
			return {
				...state,
				dates: buff,
				active: buff[0].date,
				today: buff[0].date
			};


		case types.GET_DISHES:
			return {
				...state,
				dishes: action.data[0]
			}

		default:
			return state
	}
}

function addDays(d, days) {
	d.setDate(d.getDate() + parseInt(days));
	return d;
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getMonthName = function (d) {
	return months[d.getMonth()];
};
const getDayName = function (d) {
	return days[d.getDay()];
};

export default home;
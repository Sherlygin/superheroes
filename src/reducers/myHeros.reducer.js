import { ADD_HERO, REMOVE_HERO } from '../reduxActionsConstants';

const initSate = new Map();
const myHerosReducer = (state = initSate, action) => {
	switch (action.type) {
		case ADD_HERO:
			const newMap = new Map();
			state.forEach((el) => {
				const d = {...el};
				if (el.name === action.hero.name) {
					d.cnt += 1;
				}
				newMap.set(el.name, d);
			});
			if(!newMap.get(action.hero.name)){
				const data = { ...action.hero };
				data.cnt = 1;
				newMap.set(action.hero.name, data);
			}
			return newMap;
		case REMOVE_HERO:
			const newMapRemove = new Map();
			state.forEach((el) => {
				const d = {...el};
				if (el.name !== action.hero.name) {
					newMapRemove.set(el.name, d);
				}
			});
			return newMapRemove;
		default:
			return state;
	}
};

export default myHerosReducer;

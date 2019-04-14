import { ADD_HERO, REMOVE_HERO } from '../reduxActionsConstants';

export const addHero = (hero) => {
	return {
		type: ADD_HERO,
		hero,
	};
};

export const removeHero = (hero) => {
	return {
		type: REMOVE_HERO,
		hero,
	};
};


export const initialState = {
	user: null,
	// REMOVE after development
	token: null,
	tasks: [],
	proyects: [],
	// item: null,
	// currentPlaylist: null,
	// currentSong: null
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_TASKS":
			return {
				...state,
				tasks: action.tasks,
			};
		case "SET_PROYECTS":
			return {
				...state,
				proyects: action.proyects,
			};
		// case "SET_CURRENT_PLAYLISTS":
		// 	return {
		// 		...state,
		// 		currentPlaylist: action.currentPlaylist,
		// 	};
		// case "SET_CURRENT_SONG":
		// 	return {
		// 		...state,
		// 		currentSong: action.currentSong,
		// 	};
		// case "SET_CURRENT_VOLUME":
		// 	return {
		// 		...state,
		// 		currentVolume: action.currentVolume,
		// 	};
		default:
			return state;
	}
};

export default reducer;

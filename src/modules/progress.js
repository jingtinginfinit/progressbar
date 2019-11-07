import progressApi from './api/progressApi';

export const PROGRESS_LIST = 'progress/LIST';

const initialState = {
	progressList: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case PROGRESS_LIST:
			return {
				...state,
				progressList: action.payload
			};

		default:
			return state;
		
	}
};

export const progressGetData = () => {
	return dispatch => {
		return progressApi.ProgressGetData().then(data => {
			dispatch({
				type: PROGRESS_LIST,
				payload: data
			});

			return data;
		}).catch(error => {
			throw(error);
		});
	};
};

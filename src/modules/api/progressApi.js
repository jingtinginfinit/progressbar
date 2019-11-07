import axios from 'axios';
import config from '../../config';

const progressInstance = axios.create({
	baseURL: config.api,
	headers: {
		'Content-Type': 'application/json'
	}
});

class ProgressApi {
	static ProgressGetData() {
		return progressInstance.get('/bars')
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			throw(error);
		});
	}
}

export default ProgressApi; 

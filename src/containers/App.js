import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ProgressBar from './progress/ProgressBar';

import './app.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ProgressBar />
			</div>
		);
	}
}

export default withRouter(App);

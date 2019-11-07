import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Select, Button } from 'antd';

import './progressbar.css';

import {
	progressGetData
} from '../../modules/progress';

const { Option } = Select;

class ProgressComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			loaded: false,
			progressObject: null,
			selectedBar: null
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.props.progressGetData().then(
			(res) => {
				this.setState({ loaded: true, selectedBar: 0, progressObject: res });
			}
		);
	}

	selectChange(value) {
		this.setState({ selectedBar: value });
	}

	changeProgress(value) {
		const { selectedBar, progressObject } = this.state;

		progressObject.bars[selectedBar] += value;

		if (progressObject.bars[selectedBar] < 0) {
			progressObject.bars[selectedBar] = 0;
		}
		
		this.setState({ progressObject });
	}

	render() {
		const { loaded, selectedBar, progressObject } = this.state;

		let barElements = [];
		let selectOptions = [];
		let buttonElements = [];

		if (loaded) {
			barElements = progressObject.bars.map((bar, index) => {
				let status = false;
				let color = '';

				if (bar > 0) {
					status = true;

					if (bar > progressObject.limit) {
						color = 'danger';
					}
				}

				return (
					<ProgressBar animated={status} now={bar} label={`${bar}`} key={`progress${index}`} max={progressObject.limit} variant={color} />
				);
			});

			selectOptions = progressObject.bars.map((bar, index) => {
				return (
					<Option value={index} key={`select${index}`}>Progress Bar {index + 1}</Option>
				);
			});

			buttonElements = progressObject.buttons.map((value, index) => {
				let displayValue = value;

				if (`${value}`.indexOf('-') === -1) {
					displayValue = `+${value}`;
				}

				return (
					<Button key={`button${index}`} onClick={() => this.changeProgress(value)}>{displayValue}</Button>
				);
			});
		}

		return (
			<div className="progress-wrapper wrapper">
				<div className="progress-title">
					<span>
						Progress Bars Demo
					</span>
				</div>
				<div className="bars-container">
					{barElements}
				</div>
				<div className="control-container">
					<Select value={selectedBar} onChange={this.selectChange.bind(this)}>
						{selectOptions}
					</Select>
					<div className="button-container">
						{buttonElements}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	progressList: state.progress.progressList
});

const mapDispatchToProps = dispatch =>
bindActionCreators(
	{
		progressGetData
	},
	dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(ProgressComponent);

import React from 'react';
import './home-layout.scss';
import WeekDay from '../../components/weekDay';
import Aux from '../../hoc/aux';
import DayItems from '../elements/DayItems';
// import http from '../../http/http';
import { connect } from 'react-redux';
import * as types from './../../constants';

class HomeLayout extends React.Component {
	selDate = i => {
		this.props.selDate(i);
		document
			.querySelector('#di' + i)
			.scrollIntoView({ behavior: 'smooth', block: 'center' });
	};

	render() {
		return (
			<Aux>
				<div className="container">
					<WeekDay
						dates={this.props.home.dates}
						active={this.props.home.active}
						selectDate={this.selDate}
					/>
				</div>
				<div className="banner">
					<div className="container">
						<h1 className="title">Plant based diet, no oil!</h1>
						<span className="slogan">Secondary slogan goes here.</span>
						<button className="btn btn-primary">JOIN OUR CLUB</button>
					</div>
				</div>
				<div className="container">
					{this.props.home.dates.map((d, i) => {
						return <DayItems id={'di' + i} key={d + i} date={d} index={i} />;
					})}
				</div>
			</Aux>
		);
	}
}

const mapStateToProps = state => ({ home: state.home });
const mapDispatchToProps = dispatch => ({
	selDate: date => dispatch({ type: types.SELECT_DATE, selDate: date })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeLayout);

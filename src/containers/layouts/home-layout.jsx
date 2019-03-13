import React from 'react';
import './home-layout.scss';
import WeekDay from '../../components/weekDay';
import DayItems from '../elements/DayItems';
import asycGetDishes from './../../actions/actions';
import { connect } from 'react-redux';
import * as types from './../../constants';

class HomeLayout extends React.Component {
	selDate = i => {
		this.props.selDate(i);
		document
			.querySelector('#di' + i)
			.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	componentDidMount() {
		this.props.getDishes();
	}

	render() {
		return (
			<React.Fragment>
				<div className="day-sel">
				<div className="container">
					<WeekDay
						dates={this.props.home.dates}
						active={this.props.home.active}
						selectDate={this.selDate}/>
				</div>
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
						return <DayItems key={d + i} date={d} index={i}
						dishes={this.props.home.dishes} />;
					})}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({ home: state.home });
const mapDispatchToProps = dispatch => ({
	selDate: date => dispatch({ type: types.SELECT_DATE, selDate: date }),
	getDishes: () => dispatch(asycGetDishes()),
	paginate: () => dispatch({ type: types.ADD_DATES })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeLayout);

import React from 'react';
import DishItem from './../../components/dishItem';
import './DayItems.scss';

class DayItems extends React.Component {
	constructor() {
		super();

		this.state = {
			activeTab: 1,
			items: ['LUNCH', 'DINNER'],
		};
	}

	selItem = i => {
		this.setState({ activeTab: i + 1 });
	};

	componentWillMount() {
		if ((this.props.date.date.getHours() > 15) &&
		this.props.index === 0) {
			this.setState({
				lunchNotAvail: true,
				items: ['DINNER']
			});
		}
	}

	render() {
		return (
			<div className="DayItemCntnr" >
				<h2 className="dayName" id={'di' + this.props.index}>
					{this.props.date.dayName +
						', ' +
						this.props.date.monthName +
						' ' +
						this.props.date.dd}
				</h2>
				<div className="subDiv">
					<div className="btn-cntnr">
						{this.state.items.map((el, i) => {
							return (
								<button
									key={el + i}
									onClick={() => {
										this.selItem(i);
									}}
									className={
										this.state.activeTab === i + 1
											? 'btn btn-primary btn-round'
											: 'btn  btn-round'
									}
								>
									{el}
								</button>
							);
						})}
					</div>
					{this.props.date.date.toDateString() === new Date().toDateString() ? (
						<span className="info">ORDER DEADLINE: ORDER UNTIL 12PM</span>
					) : null}
				</div>
				<div className="main-items">
					<div className="title">
						<span>MAIN COURSE</span>
						<hr />
					</div>
					<div className="item-container">
						{this.props.dishes.main
							? this.props.dishes.main.map((data, dindex) => {
									return (
										<DishItem
											key={'dishItem' + dindex}
											dish={data}
											className="dish-item"
										/>
									);
							  })
							: [1, 1, 1, 1].map((k, skelIndex) => (
									<div
										key={'skelIndex' + skelIndex}
										className="dish skeleton"
									></div>
							  ))}
					</div>
				</div>
				<div className="side-items">
					<div className="title">
						<span>SIDE DISHES</span>
						<hr />
					</div>
					<div className="item-container">
						{this.props.dishes.side
							? this.props.dishes.side.map((data, dindex) => {
									return <DishItem dish={data} key={'dishItem' + dindex} />;
							  })
							: [1, 1, 1, 1].map((k, skelIndex) => (
									<div
										key={'skelIndex' + skelIndex}
										className="dish-side skeleton"
									/>
							  ))}
					</div>
				</div>
			</div>
		);
	}
}

export default DayItems;

import React from 'react';
import './weekDay.scss';

const WeekDay = props => (
	<div className="weekDay">
		{props.dates.map((el, i) => (
			<span
				key={el.dayName + el.dd}
				onClick={() => {
					props.selectDate(i);
				}}
				className={
					el.date === props.active
						? 'active weekDay-item round-btn btn'
						: 'weekDay-item round-btn btn'
				}>
				{`${el.dayName.substring(0, 3)} ${el.dd} ${el.monthName.substring(
					0,
					3
				)}`}
			</span>
		))}
	</div>
);

export default WeekDay;

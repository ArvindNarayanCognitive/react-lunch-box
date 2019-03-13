import React from 'react';
import uuid from "uuid";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const DishItem = props =>
	props.dish ? (
		<div className="dish-item">
			<LazyLoadImage
			alt={props.dish.name}
			className={props.dish.type === 'main' ? 'dishImg' : 'dishImg short'}
			src={props.dish.thumbImage}
			effect="blur"
			 />
			<div className="dish-detail">
				<div className="dish-name">{props.dish.name}</div>
				<div className="dish-subtitle">{props.dish.subtitle}</div>
				<div className="detail-end">
					<div className="dish-price">{props.dish.cost} TBH</div>
					{props.dish.hot
						? arrGen(props.dish.hot).map((v, i) => (
								<div key={props.dish.id + uuid.v4() + v + i + 'str'} className="star" />
						  ))
						: null}
				</div>
			</div>
			<div className="dish-order-btn">
				<div className="order">
					<span className="plus-icon">+</span>
					<span>ADD TO ORDER</span>
				</div>
				<div className="count">
					<span className="plus-icon">+</span>
					<span className="count-num">1</span>
					<span className="plus-icon">+</span>
				</div>
			</div>
		</div>
	) : null;

function arrGen(count) {
	return Array.apply(null, Array(parseInt(count, 10))).map(function() {
		return Math.round(Math.random() * 232);
	});
}

export default DishItem;

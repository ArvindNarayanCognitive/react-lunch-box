import React from 'react';
import Aux from '../hoc/aux';

const Nav = () => (
	<Aux>
		<nav>
			<div className="container">
				<span className="logo" />
				<div className="links">
					<span className="link">HOW TO ORDER</span>
					<span className="link">PROMOTIONS</span>
					<span className="link">ABOUT US</span>
					<span className="link">REGISTER</span>
					<span className="link btn">
						<span id="cartIcon" />
						<span>YOUR CART</span>
					</span>
				</div>
			</div>
		</nav>
		<div className="navSpacer" />
	</Aux>
);

export default Nav;

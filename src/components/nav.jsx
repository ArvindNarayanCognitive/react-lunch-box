import React from 'react';
import Aux from '../hoc/aux';

const Nav = (props) => (
	<Aux>
		<nav>
			<div className="container">
				<span className="logo" />
				<div className="links">
					<span className="lang-toggle">
						<div className="toggle">
							<input type="checkbox" id="lang-toggle" onChange={() => {
								props.toggleLang();
							}} checked={props.toggleState === 'EN' ? true : false} />
							<span className="toggle-content toggle-en" data-content="EN">
								EN
							</span>
							<span className="toggle-content toggle-th" data-content="TH">
								TH
							</span>
						</div>
					</span>
					<span className="min-ordr">MIN. ORDER IS 200 THB</span>
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
	</Aux>
);

export default Nav;

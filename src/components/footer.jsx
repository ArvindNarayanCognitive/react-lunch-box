import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const items = [
		[
			'HELP & SUPPORT',
			'Help Center',
			'Service Area',
			'Contact Support',
			'Privacy and Terms'
		],
		['COMPANY', 'How It Works', 'Blog', 'Press', 'About Us'],
		['PRODUCTS', 'Gift Card', 'iOS App', 'Android App'],
		['JOIN US', 'Facebook', 'Instagram', 'Subscribe']
	];
	return (
		<footer>
			<div className="container footer">
				<div className="logo-cntnr">
					<span className="logo" />
				</div>
				<div className="links-cntnr">
					{items.map((el, i) => (
						<div className="link-section" key={`foot-sec${i}`}>
							{el.map((linkEl, LinkIndex) => (
								<Link to="/" className="footLink" key={`footLink${LinkIndex}`}>
									{linkEl}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import React from 'react';
import HomeLayout from './containers/layouts/home-layout';
import NoRoute from './containers/layouts/404';
import Nav from './components/nav';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as type from './constants';

class App extends React.Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Nav />
					<Switch>
						<Route path="/" exact component={HomeLayout} />
						<Route component={NoRoute} />
					</Switch>
					<Footer />
				</React.Fragment>
			</Router>
		);
	}

	componentWillMount() {
		this.props.setInit();
	}
}

const mapDispatchToProps = dispatch => ({
	setInit: () => dispatch({ type: type.SET_INIT })
});

export default connect(
	null,
	mapDispatchToProps
)(App);

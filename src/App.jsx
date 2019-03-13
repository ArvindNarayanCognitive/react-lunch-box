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
	constructor() {
		super();
		this.toggleLang = this.toggleLang.bind(this);
	}

	render() {
		return (
			<Router>
				<React.Fragment>
					<Nav
						toggleLang={this.toggleLang}
						toggleState={this.props.appState.lang}
					/>
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

	toggleLang() {
		let tmpLan = this.props.appState.lang;
		if (tmpLan === 'EN') {
			this.props.setLangTh();
		} else {
			this.props.setLangEn();
		}
	}
}

const mapDispatchToProps = dispatch => ({
	setInit: () => dispatch({ type: type.SET_INIT }),
	setLangEn: () => dispatch({ type: type.SELECT_LANG_EN }),
	setLangTh: () => dispatch({ type: type.SELECT_LANG_TH })
});

const mapStateToProps = state => ({ appState: state.app });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

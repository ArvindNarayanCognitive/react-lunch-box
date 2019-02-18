import React from 'react';
import Aux from './hoc/aux';
import HomeLayout from './containers/layouts/home-layout';
import Nav from './components/nav';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Aux>
      <Nav />
      <HomeLayout />
      <Footer />
      </Aux>
    );
  }
}

export default App;

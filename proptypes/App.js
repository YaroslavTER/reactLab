import React from 'react';
import { PropTypes } from 'prop-types';
import Header from './Header';

const App = () => (
  <Header name="App Inc." specialOffer="Offer of the day."></Header>
);

App.propTypes = {
  name: PropTypes.string.isRequired,
  specialOffer: PropTypes.string,
};

App.defaultProps = {
  specialOffer: '-',
};

export default App;

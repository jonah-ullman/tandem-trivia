import React from 'react';
import ReactDOM from 'react-dom';
import { questions } from '../data';
import Home from './components/Home';

function Root() {
  return <Home />;
}

ReactDOM.render(<Root />, document.getElementById('app'));

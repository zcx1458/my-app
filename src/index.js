import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Board from './Board.js';
import Chesspiece from './Chesspiece';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

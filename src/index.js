import React from 'react';
import ReactDOM from 'react-dom';  // 'react-dom/client' V 18.0.2
import { App } from './App/App';
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);             V 18.0.2

ReactDOM.render(<App />, document.getElementById('root'));
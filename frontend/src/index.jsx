// import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
import Root from './components/root.jsx';

import './styles/index.css';
import reportWebVitals from './reportWebVitals';

// document.addEventListener('DOMContectLoaded', () =>{
//   // let store = configureStore()
//   const element = <h1>Hello, world</h1>;
//   // ReactDOM.render(<Root className='root'/>, root );
//   ReactDOM.render(element, document.getElementById('root'));

// })

ReactDOM.render(<Root />, document.getElementById('root'));



reportWebVitals();

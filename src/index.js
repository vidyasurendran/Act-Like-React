// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css'
// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import tableReducer from './reducers'
import App from './App';
import './index.css'

const store = createStore(tableReducer)//creates store using reducer

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);


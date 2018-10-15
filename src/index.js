import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

window.axios = axios;
window.token = localStorage.getItem('token');
window.app = {};
window.app.id = localStorage.getItem('id');
window.app.user = localStorage.getItem('name');

axios.defaults.baseURL = 'http://todoapp.me/api';
axios.defaults.headers.common['Authorization'] = "Bearer " + window.token;
axios.defaults.headers.common['Content-type'] = "application/json";


ReactDOM.render(<TodoApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

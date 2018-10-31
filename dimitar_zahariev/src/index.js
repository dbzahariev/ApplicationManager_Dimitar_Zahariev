import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './component/createApplication/createAplication.css';
import './component/editApplication/editApplication.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();

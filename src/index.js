import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import App from './App';
import Single from './Single';
import Photogrid from './Photogrid';
import {Provider} from 'react-redux'
import store , {history} from './store'

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Main />, document.getElementById('root'));

//serviceWorker.unregister();
ReactDOM.render(
    <Provider store = {store}>
        <Router>
              <div className = "OuterDiv">
                <Route path="/" component={App}>
                </Route>
              </div>
        </Router>
    </Provider>,
    document.getElementById('root'));

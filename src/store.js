import {createStore} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import { withRouter } from "react-router-dom";
import { compose } from 'redux';

import rootReducer from './Reducer/rootReducer.js'

import comments from './data/comments.js'

import posts from './data/posts.js'

const defaultState = {
    posts : posts,
    comments : comments
}

const store = createStore(rootReducer , defaultState)

//export const history = syncHistoryWithStore(browserHistory)

export default withRouter(store)
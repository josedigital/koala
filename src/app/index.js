import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import NoteList from './components/note/note_list/NoteList';
import Custom_job from './components/custom_job/custom_job';

import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />;
        <Route path="/about" component={About} />
        <Route path="/custom" component={Custom_job} />
        <Route path="/note" component={NoteList} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));

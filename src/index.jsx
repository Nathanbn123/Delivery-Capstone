import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
// import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';



//
// const rootReducer = combineReducers({
//   postListReducer,
//   voteReducer
// });
//
// const store = createStore(postListReducer);
//
//
// let subscribe = store.subscribe(()=>
//   console.log(store.getState())
// );
//


const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SearchBar from './components/search_bar'
// import App from './components/app';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyBRsFqJsZo0flLvABBEu3Qv8IibCRj0GvQ'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('div.container'))

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

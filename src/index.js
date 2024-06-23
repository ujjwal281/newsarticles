import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './store/articleSlice';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
    reducer: {
        articles: articleReducer
    }
});

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);

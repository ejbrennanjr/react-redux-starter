import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';


// App Component will always be loaded
// If user enters root (/), then IndexRoute will load HomePage
// If user enters about (/about), then Route will load AboutPage
// Router sends components on properties
export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
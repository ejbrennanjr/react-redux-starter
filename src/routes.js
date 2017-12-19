import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import FriendsPage from './components/friend/FriendsPage';
import ManageFriendPage from './components/friend/ManageFriendPage';


// App Component will always be loaded
// If user enters root (/), then IndexRoute will load HomePage
// If user enters about (/about), then Route will load AboutPage
// Router sends components on properties
export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="friends" component={FriendsPage} />
        <Route path="friend" component={ManageFriendPage} />
        <Route path="friend/:id" component={ManageFriendPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
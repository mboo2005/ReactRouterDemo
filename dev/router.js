import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Home from './page/home.js';
import About from './page/about.js';
import Contact from './page/contact.js';

let App = React.createClass({
    render() {
        return (
            <div className="my-app">
                <div className="my-menu">
                    <Link to="/home">home </Link><br/>
                    <Link to="/about">About </Link><br/>
                    <Link to="/contact">Contact </Link>
                </div>
                <div className="my-page-view">
                 {this.props.children}
                </div>
            </div>
        );
    }
});

let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="home" component={Home} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>
);
ReactDOM.render((routes), document.getElementById("myApp"))
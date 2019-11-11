import React from 'react';
import ReactDOM from 'react-dom';
import Renderer from './Renderer';
import Landing from './Landing';
import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import './index.css';

const path = window.location.search;

switch (path) {
    case "?digger":
        ReactDOM.render(<Renderer path={path.substr(1)} cycles="1000" autolock={false} />, document.getElementById('root'));
    break;
    case "?arkanoid":
        ReactDOM.render(<Renderer path={path.substr(1)} cycles="1000" autolock={true} />, document.getElementById('root'));
    break;
    case "?dhry2":
        ReactDOM.render(<Renderer path={path.substr(1)} cycles="max" autolock={false} />, document.getElementById('root'));
    break;

    default:
        ReactDOM.render(<Landing />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
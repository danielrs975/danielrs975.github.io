import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Component
import App from '../App';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/en" component={App} exact={true} />
                <Route path="/es" component={App} exact={true} />
                <Route path="/fr" component={App} exact={true} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;
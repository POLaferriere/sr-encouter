import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { Redirect, Route, Router as RRouter, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import Login from './containers/Login';
import { App } from './containers/App';
import Protected from './components/protected';

const history = createBrowserHistory();

class Router extends React.Component<any, {}> {
    render() {
        const { auth } = this.props;
        return (
            <RRouter history={history}>
                <Switch>
                    <Route exact path="/" component={(m) => {
                        return <Protected {...m}>
                            <App {...m}/>
                        </Protected>
                    }} />
                    <Route path="/login" component={Login} />
                </Switch>
            </RRouter>
        )
    }
}
interface In {
    auth: any;
}

const stateToProps = (state: State): In => ({
    auth: state.firebase.auth,
})

interface Out {}

const dispatchToProps = (d: Dispatch<State>): Out => ({})

export default connect(stateToProps, dispatchToProps)(Router)
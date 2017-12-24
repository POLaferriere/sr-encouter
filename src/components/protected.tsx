import * as React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router';

interface IProtectedProps {
    children: JSX.Element;
}

const Protected = ({ auth, children }: IProtectedProps & In) => {
    if (!auth.isLoaded || auth.isEmpty) return <Redirect to={'/login'} />
    return <div>
        {children
    }</div>
}

interface In {
    auth: any;
}

const stateToProps = ({ firebase }: State['firebase']) => ({
    auth: firebase.auth,
})

export default connect(stateToProps)(Protected)
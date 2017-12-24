import * as React from 'react'
import { connect, Dispatch } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { firebaseConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router';

import LoginForm from '../../components/Login';

interface FirebaseProps {
    firebase: any;
}


class Login extends React.Component<In & Out & FirebaseProps, {}> {
    login = async () => {
        const { email, firebase, password } = this.props;
        let res = await firebase.login({email, password})
        if (res) console.log('SUCESS'); console.log(res);
    }
    logout = async () => {
        const { firebase } = this.props;
        firebase.logout();
    }
    render() {
        const { auth } = this.props;
        if (auth.isLoaded && !auth.isEmpty) {
            return <Redirect to='/' />
        }
        return (
            <div className='flex justify-center'>
                <LoginForm onSubmit={this.login} logout={this.logout}/>
            </div>
        )
    }
}
const selector = formValueSelector('login')

interface In {
    email: string;
    password: string;
    auth: any;
}

const stateToProps = (state: State): In => ({
    email: selector(state, 'email'),
    password: selector(state, 'password'),
    auth: state.firebase.auth,
})

interface Out {}

const dispatchToProps = (d: Dispatch<State>): Out => ({})

export default firebaseConnect()(connect(stateToProps, dispatchToProps)(Login))
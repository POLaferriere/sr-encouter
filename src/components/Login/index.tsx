import * as React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { StyledComponentProps, withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';

interface ILoginProps {
    onSubmit: () => void;
    logout: () => void;
}

const renderedTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      label={label}
      {...input}
      {...custom}
    />
)

const styles = theme => ({
    card: {
        minWidth: 300
    }
})

const Login = ({ logout, onSubmit, classes }: ILoginProps & StyledComponentProps) => {
    return (
        <Card raised className={classes.card}>
            <CardContent>
                <h1>Login</h1>
                <form className='flex column' onSubmit={onSubmit}>
                    <Field 
                        name='email' 
                        component={renderedTextField}
                        label='email'/>
                    <Field 
                        name='password' 
                        component={renderedTextField}
                        label='password'
                        type='password'/>
                </form>
            </CardContent>
            <CardActions>
                <Button onClick={onSubmit}>Login</Button>
                <Button onClick={logout}>Logout</Button>
            </CardActions>
        </Card>
    )
}

export default reduxForm({form: 'login'})(withStyles(styles)(Login));
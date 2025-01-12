import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';

const AuthLayout = () => {
    return (
        <Router>
            <div className="auth-layout">
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <Route path="/signup" component={SignupForm} />
                </Switch>
            </div>
        </Router>
    );
};

export default AuthLayout;
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useInitializeAuth, useRequestAccessToken } from '../../redux/auth/hooks';
import Spinner from '../Spinner/Spinner';

const Auth = () => {
    const { search } = useLocation();
    const initializeAuth = useInitializeAuth();
    const [, requestAccessToken] = useRequestAccessToken();

    const params = new URLSearchParams(search);
    const code = params.get('code');

    useEffect(() => {
        if (typeof code === 'string' && code.length > 0) {
            requestAccessToken(code);
        } else {
            initializeAuth();
        }
    }, [code]);

    return <Spinner />;
};

export default Auth;

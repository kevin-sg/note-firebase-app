import { createReducer } from '@reduxjs/toolkit';

import { AuthLoginAction, AuthLogoutAction } from '../actions';

interface InitialAuthState {
  checking: boolean;
  username: string | null;
  email: string | null;
  errorMessage: string | null;
  avatar: string | null;
  token: string | null;
  uid: string | null;
}

const initialAuthState: InitialAuthState = {
  checking: false, // authenticate
  username: null,
  email: null,
  errorMessage: null,
  avatar: null,
  token: null,
  uid: null,
};

const AuthRecucer = createReducer(initialAuthState, (builder) => {
  builder.addCase(AuthLoginAction, (state, { payload }) => {
    // state.avatar = payload.avatar;
    // state.email = payload.email;
    // state.uid = payload.uid;
    // state.username = payload.username;
    // state.checking = true;
    return { ...state, ...payload, checking: true };
  });
  builder.addCase(AuthLogoutAction, (state) => {
    state.avatar = null;
    state.checking = false;
    state.email = null;
    state.uid = null;
    state.username = null;
  });
});

export default AuthRecucer;

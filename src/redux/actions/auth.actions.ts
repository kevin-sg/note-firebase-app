import { createAction } from '@reduxjs/toolkit';
import { IUserModel } from '@/models';

export const AuthLoginAction = createAction<IUserModel>('Login - [Auth]');
export const AuthLogoutAction = createAction('Logout - [Auth]');

import { configureStore } from '@reduxjs/toolkit';

import { AuthRecucer } from './reducers';

export const store = configureStore({
  reducer: { AuthRecucer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

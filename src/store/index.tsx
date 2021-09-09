import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middleware: any = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });
  middleware.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middleware),
});

export type IStateReduced = ReturnType<typeof store.getState>
export type IAppDispatch = typeof store.dispatch;

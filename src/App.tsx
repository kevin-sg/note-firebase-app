import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import type { FC } from 'react';

import { store } from '@/redux';
import { RootRouter } from '@/routers';
import { ThemeProvider } from '@/context';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

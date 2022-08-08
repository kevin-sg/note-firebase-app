import { BrowserRouter } from 'react-router-dom';
import type { FC } from 'react';

import { RootRouter } from '@/routers';
import { ThemeProvider } from '@/context';

const App: FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import type { FC } from 'react';

import { LoginPage, RegisterPage, NotePage } from '@/pages';

const RootRouter: FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NotePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />

        <Route path='/*' element={<Navigate to={'/login'} />} />
      </Routes>
    </div>
  );
};

export default RootRouter;

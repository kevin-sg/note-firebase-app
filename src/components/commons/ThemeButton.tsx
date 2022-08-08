import { BsSun, BsMoon } from 'react-icons/bs';
import type { FC } from 'react';

import { toogleTheme } from '@/utilities';

const ThemeButton: FC = () => {
  return (
    <button
      id='theme-toggle'
      type='button'
      className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'
      onClick={() => toogleTheme()}
    >
      {''}
      <BsSun id='theme-toggle-light-icon' className='hidden dark:block w-5 h-5' />
      <BsMoon id='theme-toggle-dark-icon' className='block dark:hidden w-5 h-5' />
    </button>
  );
};

export default ThemeButton;

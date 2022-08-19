import { BsBookmark } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { FC, useCallback } from 'react';

import { ThemeButton, NothingSelected } from '@/components';
import { useAppDispatch, AuthLogoutAction } from '@/redux';
import { authSignOut } from '@/firebase';

const NotePage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      await authSignOut();
      dispatch(AuthLogoutAction());
      navigate('/login', { replace: true });
      console.log('handleLogout: Sign-out successful.');
    } catch (err) {
      // An error happened.
      console.error(err);
    }
  }, []);

  return (
    <div className='h-screen flex'>
      <header className='fixed top-0 right-0 z-40 w-[calc(100%-18rem)] px-2 sm:px-4 py-2.5'>
        <div className='w-4/5 mx-auto flex justify-between items-center'>
          <Link to={'/'}>
            <h3>Here Logo</h3>
          </Link>
          <div className='inline-flex gap-4 items-center'>
            <ThemeButton />
            <button type='button' onClick={handleLogout}>
              {' '}
              <BiExit className='text-2xl text-gray-900 hover:text-red-500 dark:text-gray-200 dark:hover:text-red-400' />
            </button>
          </div>
        </div>
      </header>

      <aside className='w-72' aria-label='Sidebar'>
        <div className='h-full overflow-y-auto bg-gray-100 dark:bg-gray-800 shadow-gray-300/90 shadow-2xl dark:shadow-gray-900/90'>
          <div className='py-4 pl-3 bg-gray-50 dark:bg-transparent'>
            <h3 className='text-lg font-semibold'>Test 1</h3>
          </div>

          <div className='h-0.5 bg-gray-200 dark:bg-gray-700'></div>

          <ul className='w-full flex gap-2 flex-col' role='list'>
            {['January', 'February', 'March', 'April'].map((month, i) => (
              <li key={i} className='bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700'>
                <button type='button' className='py-2 flex gap-x-5 justify-center items-center'>
                  <div className='pl-3'>
                    <BsBookmark className='text-xl text-yellow-400' />
                  </div>

                  <div className='text-left'>
                    <h3 className='font-semibold text-gray-800 dark:text-gray-400'>{month}</h3>
                    <p className='text-gray-500 dark:text-gray-50'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illo?
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className='w-[calc(100%-18rem)] h-screen'>
        <div className='w-4/5 h-4/5 mx-auto mt-16 px-2 sm:px-4 py-4'>
          <NothingSelected message='Select or create an entry' />

          {/* <Note /> */}
        </div>

        <footer className='py-4'>
          <div>
            <h3 className='text-center text-sm dark:text-gray-500'>Copyright 2022</h3>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default NotePage;

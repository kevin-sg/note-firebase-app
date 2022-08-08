import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import type { FC } from 'react';

const SocialButtons: FC = () => {
  return (
    <div className='block sm:flex justify-center items-center'>
      <button
        type='button'
        className='w-full border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-400 dark:hover:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600/50 focus:ring-4 focus:outline-none focus:ring-gray-700/50 font-medium rounded-lg text-sm px-4 py-2.5 text-center flex gap-2 justify-center items-center dark:focus:ring-gray-800/55 mr-2 mb-2'
      >
        <FcGoogle className='text-xl text-current' aria-hidden='true' focusable='false' data-icon='google' role='img' />
        Sign in with Google
      </button>
      <button
        type='button'
        className='w-full border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-400 dark:hover:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600/50 focus:ring-4 focus:outline-none focus:ring-gray-700/50 font-medium rounded-lg text-sm px-4 py-2.5 text-center flex gap-2 justify-center items-center dark:focus:ring-gray-700/55 mr-2 mb-2'
      >
        <BsGithub
          className='text-xl text-current dark:text-white'
          aria-hidden='true'
          focusable='false'
          data-prefix='fab'
          data-icon='github'
          role='img'
        />
        Sign in with Github
      </button>
    </div>
  );
};

export default SocialButtons;

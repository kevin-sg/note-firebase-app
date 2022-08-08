import type { FC } from 'react';

const TextLine: FC = () => {
  return (
    <div className='w-full my-1 inline-flex items-center'>
      <div className='w-full h-0.5 bg-gray-200 dark:bg-gray-600' />
      <div className='px-5 text-center text-gray-500 dark:text-gray-400 bg-transparent rounded-full'>
        <span>or</span>
      </div>
      <div className='w-full h-0.5 bg-gray-200 dark:bg-gray-600' />
    </div>
  );
};

export default TextLine;

import { GiNotebook } from 'react-icons/gi';
import { GrFormAdd } from 'react-icons/gr';
import type { FC } from 'react';

const NothingSelected: FC<{ message: string }> = ({ message }) => {
  return (
    <div className='relative w-full h-full flex justify-center items-center bg-gray-100 dark:bg-gray-800 shadow-gray-300/90 shadow-2xl dark:shadow-gray-900 rounded-lg'>
      <div className='flex gap-2 flex-col items-center'>
        <GiNotebook className='text-6xl' />
        <span className='capitalize'>{message}</span>

        <div className='absolute z-20 bottom-5 right-5'>
          <button type='button' className='p-3 bg-green-500 hover:bg-green-600 rounded-full'>
            {''}
            <GrFormAdd className='text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NothingSelected;

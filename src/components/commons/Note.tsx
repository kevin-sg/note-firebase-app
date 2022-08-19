import type { FC } from 'react';
import Button from './Button';

const Note: FC = () => {
  return (
    <div>
      <form noValidate>
        <div className='my-4 flex justify-between items-center'>
          <h2 className='text-xl font-semibold'>{new Date().toISOString()}</h2>
          <Button text='Save note' type='button' />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='title' className='sr-only'>
            Title
          </label>
          <input
            id='title'
            type='text'
            placeholder='Title'
            className='bg-gray-100 border p-4 border-gray-400 dark:bg-gray-700 dark:border-gray-600 outline-none rounded shadow-gray-200/50 dark:shadow-gray-800 shadow-lg'
          />
        </div>

        <div className='my-4'>
          <label htmlFor='comment' className='sr-only'>
            Text
          </label>
          <textarea
            name='comment'
            id='comment'
            cols={20}
            rows={22}
            maxLength={400}
            placeholder='what happened today?'
            wrap='hard'
            className='w-full p-4 bg-gray-100 border-gray-400 resize-none border dark:border-gray-600 dark:bg-gray-700 outline-none rounded overflow-hidden shadow-gray-200/50'
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Note;

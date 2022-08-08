import type { UseFormRegisterReturn } from 'react-hook-form';
import type { FC } from 'react';

interface ICheckboxProps {
  id?: string;
  description?: string;
  textLink?: string;
  link?: string;
  errorMessage?: string | undefined;
  register: UseFormRegisterReturn<any>;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
  const { id, description, textLink, errorMessage, link, register } = props;

  return (
    <div>
      <div className='flex items-start'>
        <div className='flex items-center h-5'>
          <input
            id={id}
            aria-describedby='remember'
            type='checkbox'
            className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
            {...register}
          />
        </div>
        <div className='ml-3 text-sm'>
          <label htmlFor={id} className='text-gray-500 dark:text-gray-300'>
            {description}{' '}
            {textLink && (
              <button type='button' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
                {textLink}
              </button>
            )}
          </label>
        </div>
      </div>
      {!!errorMessage && (
        <span className='mt-1 ml-1 text-red-600 dark:text-red-500 text-sm font-semibold'>{errorMessage}</span>
      )}
    </div>
  );
};

export default Checkbox;

import type { UseFormRegisterReturn } from 'react-hook-form';
import type { FC } from 'react';

interface InputBaseProps {
  id?: string;
  type: 'text' | 'email' | 'password';
  label?: string;
  errorMessage: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<any>;
}

const InputBase: FC<InputBaseProps> = (props) => {
  const { id, type, label, placeholder, errorMessage, register } = props;

  return (
    <div>
      <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg placeholder-gray-400 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        {...register}
      />
      {!!errorMessage && (
        <span className='mt-1 ml-1 text-red-600 dark:text-red-500 text-sm font-semibold'>{errorMessage}</span>
      )}
    </div>
  );
};

export default InputBase;

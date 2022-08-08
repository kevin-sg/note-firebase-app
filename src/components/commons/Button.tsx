import type { FC } from 'react';
import clsx from 'clsx';

interface IButtonProps {
  text: string;
  type: 'button' | 'submit';
  size?: 'full' | 'normal';
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({ text, size, type, disabled = false }) => {
  return (
    <button
      type={type}
      className={clsx(
        disabled ? 'disabled:bg-blue-400 disabled:dark:bg-blue-800 cursor-not-allowed' : 'bg-blue-600',
        size === 'full' ? 'w-full' : 'block',
        'text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      )}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

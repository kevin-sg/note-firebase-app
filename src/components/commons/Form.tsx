import type { FC, FormEvent, ReactNode } from 'react';

interface IFormProps {
  children: ReactNode;
  onSubmit: (ev: FormEvent<HTMLFormElement>) => void;
}

const Form: FC<IFormProps> = ({ onSubmit, children }) => {
  return (
    <form className='space-y-6 md:space-y-4' onSubmit={onSubmit} noValidate>
      {children}
    </form>
  );
};

export default Form;

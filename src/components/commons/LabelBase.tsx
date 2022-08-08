import type { FC } from 'react';

interface ILabelBaseProps {
  text: string;
}

const LabelBase: FC<ILabelBaseProps> = ({ text }) => {
  return <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{text}</label>;
};

export default LabelBase;

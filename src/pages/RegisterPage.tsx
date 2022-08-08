import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FC, useCallback } from 'react';

import { initialRegisterValues } from '@/models';
import { userRegistrationScheme } from '@/utilities';
import { AuthLayout, Checkbox, Form, InputBase, SocialButtons, TextLine, Button } from '@/components';

interface IFormInputs {
  username: string;
  email: string;
  password: string;
  password1: string;
  termAndConditions: boolean;
}

const RegisterPage: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(userRegistrationScheme),
    defaultValues: initialRegisterValues,
  });

  const onSubmit = useCallback((data: IFormInputs) => {
    console.log('onSubmit: ', data);
    reset(initialRegisterValues);
  }, []);

  return (
    <AuthLayout title='Create your Free Account'>
      <SocialButtons />
      <TextLine />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBase
          id='username'
          type='text'
          label='Full Name'
          errorMessage={errors.username?.message}
          placeholder='e.g. Toom Green'
          register={{ ...register('username') }}
        />
        <InputBase
          id='email'
          type='email'
          label='Your email'
          errorMessage={errors.email?.message}
          placeholder='example@company.com'
          register={{ ...register('email') }}
        />
        <InputBase
          id='password'
          type='password'
          label='Password'
          errorMessage={errors.password?.message}
          placeholder='••••••••'
          register={{ ...register('password') }}
        />
        <InputBase
          id='password1'
          type='password'
          label='Confirm password'
          errorMessage={errors.password1?.message}
          placeholder='••••••••'
          register={{ ...register('password1') }}
        />

        <div className='flex items-center justify-between'>
          <Checkbox
            description='I accept the'
            textLink='Terms and Conditions'
            errorMessage={errors.termAndConditions?.message}
            register={{ ...register('termAndConditions') }}
          />
        </div>

        <Button text='Sign in to your account' size='full' disabled={!isDirty || isSubmitting} type='submit' />

        <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
          Already have an account?{' '}
          <span className='text-blue-600 hover:underline dark:text-blue-500'>
            <Link to={'/login'}>Login here</Link>
          </span>
        </p>
      </Form>
    </AuthLayout>
  );
};

export default RegisterPage;

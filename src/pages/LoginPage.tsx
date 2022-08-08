import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FC, useCallback } from 'react';

import { userLoginScheme } from '@/utilities';
import { initialLoginValues } from '@/models';
import { AuthLayout, InputBase, Checkbox, SocialButtons, TextLine, Button, Form } from '@/components';

interface IFormInputs {
  email: string;
  password: string;
  rememberme: boolean;
}

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(userLoginScheme),
    defaultValues: initialLoginValues,
  });

  const onSubmit = useCallback((data: IFormInputs) => {
    console.log('onSubmit: ', data);
    reset(initialLoginValues);
  }, []);

  return (
    <AuthLayout title='Welcome back'>
      <SocialButtons />
      <TextLine />

      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <div className='flex items-center justify-between'>
          <Checkbox description='Remember me' register={{ ...register('rememberme') }} />
          <span className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'>
            <Link to={'/test-password'}>Forgot password?</Link>
          </span>
        </div>

        <Button text='Login in to your account' size='full' disabled={!isDirty || isSubmitting} type='submit' />

        <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
          Don't have an account yet?{' '}
          <span className='text-blue-600 hover:underline dark:text-blue-500'>
            <Link to={'/register'}>Sign up</Link>
          </span>
        </p>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;

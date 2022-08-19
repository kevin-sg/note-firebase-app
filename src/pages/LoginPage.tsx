import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { FC, useCallback } from 'react';

import { AuthLoginAction } from '@/redux';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { userLoginScheme } from '@/utilities';
import { signInWithGoogle } from '@/firebase';
import { initialLoginValues } from '@/models';
import { userGoogleAdapter } from '@/adapters';
import {
  AuthLayout,
  InputBase,
  Checkbox,
  SocialButtons,
  TextLine,
  Button,
  Form,
} from '@/components';

interface IFormInputs {
  email: string;
  password: string;
  rememberme: boolean;
}

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const { checking } = useAppSelector((state) => state.AuthRecucer);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<IFormInputs>({
    defaultValues: initialLoginValues,
    resolver: yupResolver(userLoginScheme),
  });

  const onSubmit = useCallback((data: IFormInputs) => {
    console.log('onSubmit: ', data);
    reset(initialLoginValues);
  }, []);

  const handleGoogleSubmit = async () => {
    try {
      const user = await signInWithGoogle();
      dispatch(AuthLoginAction(userGoogleAdapter(user)));

      navigate('/', { replace: true });
    } catch (err) {
      // Handle Errors here.
      // const errorCode = err?.code;
      // const errorMessage = err?.message;
      console.error({ err });
    }
  };

  return (
    <AuthLayout title='Welcome back'>
      <SocialButtons onGoogleSingIn={handleGoogleSubmit} />
      <TextLine />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBase
          errorMessage={errors.email?.message}
          id='email'
          label='Your email'
          placeholder='example@company.com'
          register={{ ...register('email') }}
          type='email'
        />

        <InputBase
          errorMessage={errors.password?.message}
          id='password'
          label='Password'
          placeholder='••••••••'
          register={{ ...register('password') }}
          type='password'
        />

        <div className='flex items-center justify-between'>
          <Checkbox description='Remember me' register={{ ...register('rememberme') }} />
          <span className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'>
            <Link to={'/test-password'}>Forgot password?</Link>
          </span>
        </div>

        <Button
          disabled={!isDirty || isSubmitting || checking}
          size='full'
          text='Login in to your account'
          type='submit'
        />

        <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <span className='text-blue-600 hover:underline dark:text-blue-500'>
            <Link to={'/register'}>Sign up</Link>
          </span>
        </p>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;

import * as Yup from 'yup';

export const userLoginScheme = Yup.object({
  email: Yup.string().email('Enter email valid').required('Email is required'),
  password: Yup.string().min(8, 'Min 8').max(12, 'Max 12').required('Password is required'),
});

export const userRegistrationScheme = Yup.object({
  username: Yup.string()
    .min(3, `Username must be less than ${3} characters`)
    .max(15, `Username must be more than ${15} characters`)
    .required('Username is required'),
  email: Yup.string().email('Enter email valid').required('Email is required'),
  password: Yup.string().min(5, 'Min 5').max(12, 'Max 12').required('Password is required'),
  password1: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Please enter a password'),
  termAndConditions: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
});

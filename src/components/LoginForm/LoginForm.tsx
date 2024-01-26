import { FC } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { FormikHelpers, Form, Field, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { logIn } from '../../redux/auth/operations';
import { toastOptions } from '../../utils/toastOptions';
import { LoginData } from '../../redux/auth/operations';

interface IFormError {
  name: string;
}

let schema = yup.object().shape({
  email: yup
    .string()
    .label('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .label('Enter your password')
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

const FormError: FC<IFormError> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => {
        return <div className='absolute top-0 right-0 text-sm w-[200px] p-1 text-blue bg-lavender rounded-lg border-2 border-chestnut'>{message}</div>;
      }}
    />
  );
};

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: LoginData, { resetForm }: FormikHelpers<LoginData>) => {
    const resultAction  = await dispatch(logIn({
      email: values.email.trim(),
      password: values.password.trim(),
    }));
    if (logIn.fulfilled.match(resultAction)) {
      resetForm();
      // Успешно завершено
      toast.success(
        `You have successfully Log In`,
        toastOptions
      );
    } else if (logIn.rejected.match(resultAction)) {
      // Обработка ошибки
      toast.error(
        `An error has occurred, please check the information you entered`,
        toastOptions
      );
    }
  };

  return (
    <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={schema}
    onSubmit={handleSubmit}
  >
    <Form className='w-[500px] flex flex-col items-center bg-lightBlue rounded-lg p-4 shadow-lg mx-auto'>
    <label className='w-full flex flex-col p-3 gap-2 text-deepBlue'>
          Email
          <div className='w-full relative'>
            <Field className='w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0' type="text" name="email" autoComplete="off" />
            <FormError name="name" />
          </div>
        </label>
        <label className='w-full flex flex-col p-3 gap-2 text-deepBlue'>
          Password
          <div className='w-full relative'>
            <Field className='w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0' type="text" name="password" autoComplete="off" />
            <FormError name="name" />
          </div>
        </label>
      <button className='inline-flex items-center justify-center border-none outline-none text-lg text-deepBlue shadow-lg bg-primaryLight min-w-[64px] mt-4 px-4 py-2 rounded-[4px] font-medium uppercase transition-all duration-300 hover:scale-[1.02] hover:text-white hover:bg-deepBlue' type="submit">
        Log in
      </button>
    </Form>
    </Formik>
  );
};

export default LoginForm;

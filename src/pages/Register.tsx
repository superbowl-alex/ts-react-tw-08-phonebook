import { FC } from 'react';
import { Helmet } from 'react-helmet';
import RegisterForm from '../components/RegisterForm';

const Register: FC = () => {
  return (
    <div className='w-full'>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;

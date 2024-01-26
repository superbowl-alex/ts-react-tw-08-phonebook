import { FC } from 'react';
import { Helmet } from 'react-helmet';
import LoginForm from '../components/LoginForm';

const Login: FC = () => {
  return (
    <div className='w-full'>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default Login;

import { FC } from 'react';
import { Helmet } from 'react-helmet';

const Home: FC = () => {
  return (
    <div className='w-full'>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className='w-[800px] bg-lightBlue mx-auto rounded-lg items-center p-6 border-deepBlue shadow-xl'>
        <h4 className='text-center text-deepBlue font-light text-6xl'>
          To access your phonebook,<br></br> please login or register
        </h4>
      </div>
    </div>
  );
};

export default Home;

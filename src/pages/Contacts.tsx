import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '../redux/hooks';
import { fetchContacts } from '../redux/contacts/operations';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';

const Contacts: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div className='flex items-start w-[1080px] mx-auto gap-16'>
        <div className='flex flex-col items-center w-[500px] bg-lightBlue mx-auto rounded-lg p-4 shadow-md'>
          <div className='mb-8'>
            <h3 className='mb-4 text-center text-deepBlue text-5xl'>
              Phonebook
            </h3>
            <ContactForm />
          </div>
          <div className='w-[400px] bg-lightBlue mx-auto rounded-lg p-4 shadow-md text-center'>
            <h4 className='mb-2 text-deepBlue text-center text-4xl'>
              Find contact
            </h4>
            <Filter />
          </div>
        </div>
        <ContactList />
      </div>
    </main>
  );
};

export default Contacts;

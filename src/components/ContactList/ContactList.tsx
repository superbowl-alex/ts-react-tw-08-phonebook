import { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import {
  selectVisibleContacts,
  selectPendingStatus,
} from '../../redux/contacts/selectors';
import ContactItem from '../ContactItem';
import Notification from '../Notification';

const ContactList: FC = () => {
  const contacts = useAppSelector(selectVisibleContacts);
  const pending = useAppSelector(selectPendingStatus);

  return (
    <div className='flex flex-col items-center w-[500px] ml-[40px] bg-lightBlue p-4 rounded-lg shadow-lg'>
      <h3 className='text-deepBlue text-center text-5xl mb-4'>
        Contacts
      </h3>
      {pending && (
        <div className='w-[400px] h-[40px] mb-3 rounded-lg bg-primaryLight shadow-md'>
        </div>
      )}
      {!pending && contacts.length === 0 ? (
        <Notification message="There is no contact in Phonebook" />
      ) : (
        <ul className='m-0 p-0 list-none'>
          {contacts.map(({ id, name, number }) => (
            <li className='mb-3' key={id}>
              <ContactItem id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;

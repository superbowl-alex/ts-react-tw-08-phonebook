import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Formik, Form, Field, ErrorMessage, FormikHelpers  } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { Contact, Data } from '../../redux/contacts/contactsSlice';
import { toastOptions } from '../../utils/toastOptions';

interface IFormError {
  name: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .label('Enter contact name')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces without spaces at the beginning and end of the name'
    )
    .required('Name is required'),
    number: yup
    .string()
    .label('Enter phone number')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is required'),
});

const FormError: FC<IFormError> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => {
        return <div className='absolute top-0 right-0 text-sm w-[200px] p-1 text-blue bg-secondaryLight rounded-lg border-2 border-chestnut'>{message}</div>;
      }}
    />
  );
};


const ContactForm: FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  const handleSubmit = async (values: Data, { resetForm }: FormikHelpers<Data>) => {
    const findContactByName = (array: Contact[], newName: string) => {
      return array.find(({ name }) => name.toLowerCase() === newName);
    };

    const { name } = values;
    const normalizedName = name.toLowerCase().trim();

    if (findContactByName(contacts, normalizedName)) {
      toast.error(`${name} is already in contacts`, toastOptions);
      return;
    }

    const resultAction  = await dispatch(addContact(values));
    if (addContact.fulfilled.match(resultAction)) {
      resetForm();
      // Успешно завершено
      toast.success(
        `New contact has been successfully added`,
        toastOptions
      );
    } else if (addContact.rejected.match(resultAction)) {
      // Обработка ошибки
      toast.error(
        `An error has occurred, please check the information you entered`,
        toastOptions
      );
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
    <Form className='flex flex-col items-center w-[400px] bg-lightBlue mx-auto rounded-lg p-4 shadow-lg'>
    <label className='w-full flex flex-col p-3 text-deepBlue gap-2'>
          Name
          <div className='w-full relative'>
            <Field className='w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0' type="text" name="name" autoComplete="off" />
            <FormError name="name" />
          </div>
        </label>
        <label className='w-full flex flex-col p-3 text-deepBlue gap-2'>
          Number
          <div className='w-full relative'>
            <Field className='w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0' type="text" name="number" autoComplete="off"  />
            <FormError name="number" />
          </div>
        </label>
      <button className='inline-flex items-center justify-center border-none outline-none text-lg text-deepBlue shadow-lg bg-primaryLight min-w-[64px] mt-4 px-4 py-2 rounded-[4px] font-medium uppercase transition-all duration-300 hover:scale-[1.02] hover:text-white hover:bg-deepBlue' type="submit">
        Add contact
      </button>
    </Form>
    </Formik>
  );
};

export default ContactForm;

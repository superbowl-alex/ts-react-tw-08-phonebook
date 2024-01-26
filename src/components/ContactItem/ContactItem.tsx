import { FC } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { toast } from 'react-toastify';
import { toastOptions } from '../../utils/toastOptions';
import { deleteContact } from '../../redux/contacts/operations';
import { Contact } from '../../redux/contacts/contactsSlice';
import { IoMdCloseCircleOutline } from "react-icons/io";

const ContactItem: FC<Contact> = ({ id, name, number }) => {
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    const resultAction  = await dispatch(deleteContact(id));
    if (deleteContact.fulfilled.match(resultAction)) {
      // Успешно завершено
      toast.success(
        `Contact ${name} has been successfully deleted`,
        toastOptions
      );
    } else if (deleteContact.rejected.match(resultAction)) {
      // Обработка ошибки
      toast.error(
        `An error has occurred, contact ${name} hasn't been deleted`,
        toastOptions
      );
    }
  };

  return (
    <div className='flex items-center justify-between w-[400px] h-[40px] px-2 bg-lightDark text-deepBlue rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02]'>
      <p className='m-0 text-base text-deepBlue'>
        {name}: {number}
      </p>
      <button className='inline-flex items-center justify-center relative m-0 outline-none border-none px-[10px] py-[4px] rounded-[4px] uppercase text-sm text-deepBlue font-medium bg-primaryLight shadow-sm transition-all duration-300 hover:scale-[1.03]'
        onClick={handleDelete}>
        Delete
        <IoMdCloseCircleOutline className='w-[18px] h-[18px] mr-[-2px] ml-[8px] text-deepBlue'/>
      </button>
    </div>
  );
};

export default ContactItem;

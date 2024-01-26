import { FC } from 'react';

interface INotification {
  message: string;
}

const Notification: FC<INotification> = ({ message }) => {
  return (
    <h4 className='w-[400px] bg-primaryLight text-deepBlue rounded-lg p-4 shadow-md text-2xl'>
      {message}
    </h4>
  );
};

export default Notification;

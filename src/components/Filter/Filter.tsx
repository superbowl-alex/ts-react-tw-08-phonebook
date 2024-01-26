import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const currentFilter: string = e.currentTarget.value;
    dispatch(changeFilter(currentFilter));
  };

  return (
    <label className='w-full flex flex-col p-3 text-deepBlue gap-2'>
    Find contacts by name
    <input className='w-full p-4 rounded-lg border-none shadow-md border-blue text-xl outline-none bg-lightDark hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0'
      type="text"
      autoComplete="off"
      name="filter"
      value={filter.value}
      onChange={handleFilterChange}
    ></input>
  </label>
  );
};

export default Filter;

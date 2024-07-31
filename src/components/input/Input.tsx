import { Fragment, useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import { InputProps } from './InputProps';

type InputFilter = {
  id: string;
  value: string;
};

function Input({ filters, ...props }: InputProps) {
  const [inputFilters, setInputFilters] = useState<InputFilter[]>([]);

  const getDropdownValue = (id: string) => {
    return inputFilters?.find((filter: InputFilter) => filter.id === id)?.value;
  };

  const handleDropdownChange = (id: string, value: string) => {
    setInputFilters((prevFilters) => {
      const newFilters = prevFilters.filter((filter) => filter.id !== id);
      return [...newFilters, { id, value }];
    });
  };

  return (
    <div className='flex justify-center w-full'>
      <div className='relative z-10 w-full flex gap-x-3 p-3 pb-5 bg-white border rounded-lg shadow-lg shadow-gray-100'>
        <div className='w-full'>
          <input
            {...props}
            className='py-2.5 px-4 block w-full border-transparent rounded-lg  focus:ring-0 focus:border-0 focus:outline-none'
          />
        </div>

        <button className='size-[50px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'>
          <svg
            className='shrink-0 size-5'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='11' cy='11' r='8' />
            <path d='m21 21-4.3-4.3' />
          </svg>
        </button>
      </div>
      <div className='z-20 w-fit gap-3 flex absolute  bottom-[-30px] '>
        {filters?.map((filter) => (
          <Fragment key={filter.id}>
            <Dropdown
              value={getDropdownValue(filter?.id || '')}
              name={filter.id}
              onChange={(event) =>
                handleDropdownChange(filter.id || '', event.currentTarget.value)
              }
              {...filter}
            />
         
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Input;

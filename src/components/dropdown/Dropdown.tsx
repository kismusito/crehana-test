import { DropdownProps } from './DropdownProps';

function Dropdown({ options = [], label, ...props }: DropdownProps) {
  return (
    <select
      {...props}
      className='py-3 px-4  w-full border-solid border-[1px] border-slate-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none '
    >
      <option value=''>{label}</option>
      {options.map((option, index) => (
        <option value={option.value} key={`dropdown-option-${option.value}-${index}`}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;

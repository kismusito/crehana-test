import { CardProps } from './CardProps';

function Card({ title, onClick, slot }: CardProps) {
  return (
    <div
      className='m-1 cursor-pointer py-3 px-4 gap-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none '
      onClick={onClick}
      data-cy='card'
    >
      {slot}
      <p>{title}</p>
    </div>
  );
}

export default Card;

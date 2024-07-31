import { LoaderProps } from './EmptyStateProps';
import Lottie from 'lottie-react';
import emojiSearchAnimationData from '@/assets/lotties/emoji-search.json';
import { useNavigate } from 'react-router-dom';

function EmptyState({ title, type, action }: LoaderProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col justify-center items-center gap-3 ${type === 'page' ? 'w-screen h-screen' : 'mt-10'}`}
    >
      <Lottie
        animationData={emojiSearchAnimationData}
        loop={true}
        style={{ height: 250 }}
      />
      <p className='mt-3 text-gray-600 text-2xl'>{title}</p>
      {action && (
        <button
          onClick={() => navigate(action.to)}
          type='button'
          className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'
        >
          {action.title}
        </button>
      )}
    </div>
  );
}

export default EmptyState;

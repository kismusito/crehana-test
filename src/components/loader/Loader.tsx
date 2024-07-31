import { LoaderProps } from './LoaderProps';
import Lottie from 'lottie-react';
import loaderAnimationData from '@/assets/lotties/cat-loader.json';

function Loader({ title, type = 'section' }: LoaderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${type === 'page' ? 'w-screen h-screen' : 'mt-10'}`}
    >
      <Lottie
        animationData={loaderAnimationData}
        loop={true}
        style={{ height: 300 }}
      />
      <p className='mt-3 text-gray-600 text-2xl'>{title}</p>
    </div>
  );
}

export default Loader;

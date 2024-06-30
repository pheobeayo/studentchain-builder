import { Oval } from 'react-loader-spinner';
import './style.css';

const PageLoader = () => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 bg-[rgba(255,255,255,0.8)] z-[55] flex items-center justify-center'>
      <Oval
        height={80}
        width={80}
        color='#130701'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='#FF5100'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default PageLoader;
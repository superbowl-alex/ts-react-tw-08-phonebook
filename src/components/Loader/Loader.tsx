import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader = () => {
  return (
    <div className='mx-auto w-full relative'>
      <PropagateLoader className='!absolute top-0 left-[50%] transform-[-50%]'
        color={'rgb(205, 92, 92)'}
        size={30}
        speedMultiplier={0.4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;

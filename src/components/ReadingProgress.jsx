import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    console.log('====================================');
    console.log('This is GPT PR test. ');
    console.log('====================================');
    const bodyHeight = document.querySelector('body').offsetHeight;
    const windowHeight = window.innerHeight;

    const updateCurrentPagePercent = () => {
      const currentScrollY = window.pageYOffset;

      const currentPercent = (currentScrollY / (bodyHeight - windowHeight)) * 100;

      setPercent(currentPercent);
    };

    window.addEventListener('scroll', updateCurrentPagePercent);

    return () => {
      window.removeEventListener('scroll', updateCurrentPagePercent);
    };
  }, []);

  return (
    <>
      {/* <div>{percent}</div> */}
      <div className="sticky top-0 z-10 flex justify-start items-center h-[5px] 2-full transition-all">
        <div className="h-full w-7 bg-[#efe960]" style={{ width: `${percent}%` }} />
      </div>
    </>
  );
};

export default ReadingProgress;

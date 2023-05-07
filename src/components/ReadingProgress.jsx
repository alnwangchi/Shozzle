import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
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
      <div className="progress">
        <div className="h-full w-7 bg-[#efe960]" style={{ width: `${percent}%` }} />
      </div>
    </>
  );
};

export default ReadingProgress;

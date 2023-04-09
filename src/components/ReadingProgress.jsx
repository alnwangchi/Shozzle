import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const bodyHeight = document.querySelector('body').offsetHeight;
    const windowHeight = window.innerHeight;

    const updateCurrentPagePercent = () => {
      const currentScrollY = window.pageYOffset;

      const currentPercent = (currentScrollY / (bodyHeight - windowHeight)) * 100;
      const currentPercentToInteger = Math.ceil(currentPercent);

      setPercent(currentPercentToInteger);
    };

    window.addEventListener('scroll', updateCurrentPagePercent);

    return () => {
      window.removeEventListener('scroll', updateCurrentPagePercent);
    };
  }, []);

  return (
    <>
      {/* <div>{percent}</div> */}
      <div
        className="progress"
        style={{ backgroundColor: `${percent === 100 ? 'transparent' : ''}` }}
      >
        <div
          className="h-full bg-white rounded-full w-7"
          style={{ width: `${percent}%`, backgroundColor: `${percent === 100 ? '#efe960' : ''}` }}
        />
      </div>
    </>
  );
};

export default ReadingProgress;

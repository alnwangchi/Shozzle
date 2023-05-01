import React from 'react';
import './callout.sass';

import {
  TbAlertTriangleFilled,
  TbCircleXFilled,
  TbPinFilled,
  TbInfoCircleFilled,
  TbBulbFilled
} from 'react-icons/tb/index.js';

const colorMapper = {
  warning: '#FEFAE6',
  error: '#FFEBE6',
  note: '#EAE5FF',
  info: '#DEEBFF',
  tip: '#E3FCEF'
};

interface CalloutProps {
  children: React.ReactNode;
  className: string;
  type: 'warning' | 'error' | 'note' | 'info' | 'tip';
}

const Callout = ({ children, className = '', type = 'info', ...rest }: CalloutProps) => {
  const iconMapper = {
    warning: <TbAlertTriangleFilled className="w-6 h-6 text-[#FF9A1E]" />,
    error: <TbCircleXFilled className="w-6 h-6 text-[#DF360C]" />,
    note: <TbPinFilled className="w-6 h-6 text-[#5244AA]" />,
    info: <TbInfoCircleFilled className="w-6 h-6 text-[#0152CC]" />,
    tip: <TbBulbFilled className="w-6 h-6 text-[#038759]" />
  };

  return (
    <div
      className={`callout my-2 p-4 w-full min-h-[56px] rounded-lg overflow-hidden ${className}`}
      style={{ backgroundColor: colorMapper[type] }}
      {...rest}
    >
      <div className="callout-wrapper w-full flex justify-between">
        <div className="callout-icon mr-2 w-6 leading-6">{iconMapper[type]}</div>
        <div className="callout-content leading-6" style={{ width: 'calc(100% - 32px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Callout;

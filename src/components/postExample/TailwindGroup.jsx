import React from 'react';

const TailwindGroup = () => {
  return (
    <div className="my-5 md:w-2/3">
      <div className="group/item relative flex items-center justify-between rounded-xl p-4 bg-slate-100 hover:bg-slate-200 cursor-pointer">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <img className="h-32 w-32 rounded-full" src="/images/MyHead.png" alt="" />
          </div>
          <div className="w-full text-sm leading-6">
            <span>Allen Wang</span>
            <div className="text-slate-500">Frontend developer</div>
          </div>
        </div>
        <span
          href="#"
          className="group/edit invisible relative flex items-center whitespace-nowrap rounded-full py-1 pl-4 pr-3 text-sm text-slate-500 transition hover:bg-slate-300 group-hover/item:visible"
        >
          <span className="font-semibold decoration-transparent transition group-hover/edit:text-gray-700">
            Call Me
          </span>
          <svg
            className="mt-px h-5 w-5 text-slate-400 transition group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default TailwindGroup;

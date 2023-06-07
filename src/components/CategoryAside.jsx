import React, { useState } from 'react';
import { slugify } from '@utils/index.js';
import { BsArrowLeftCircle } from 'react-icons/bs/index.js';

// interface Props {
//   name: string;
//   categoryList: string[];
// }

// const CategoryAside: React.FC<Props> = ({ name, categoryList }) => {
const CategoryAside = (props) => {
  const { name, categoryList } = props;
  const [isOpen, setIsisOpen] = useState(true);

  const toggleAsideBar = () => setIsisOpen((b) => !b);

  return (
    <aside
      className={`sticky top-[88px] sm:top-0 sm:relative py-9 space-y-3 border-r border-solid border-r-soft transition-all z-10 ${
        isOpen ? 'w-[150px]' : 'w-5'
      }`}
    >
      <a
        href={'/category/all/'}
        className={`px-6 block whitespace-nowrap transition-all ${
          name === 'all' ? 'text-primary' : 'text-secondary'
        } ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      >
        All
      </a>
      {categoryList.map((c) => (
        <a
          key={c}
          href={`/category/${slugify(c)}/`}
          className={`px-6 block whitespace-nowrap transition-all hover:text-primary ${
            name === c ? 'text-primary' : 'text-secondary'
          } ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        >
          {c}
        </a>
      ))}
      <div
        className={`bg-white w-8 h-8 absolute top-2/4 -right-[16px] -translate-y-[32px] cursor-pointer z-50 rounded-full f-center transition-all duration-500 ${
          isOpen ? 'rotate-0' : 'rotate-180'
        }`}
      >
        <BsArrowLeftCircle onClick={toggleAsideBar} className="text-secondary w-7 h-7" />
      </div>
    </aside>
  );
};

export default CategoryAside;

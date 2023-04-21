import React, { useState } from 'react';

const TailwindPeer = () => {
  const [value, setValue] = useState();
  return (
    <>
      <div className="relative my-5 md:w-2/3">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          id="test"
          className="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-md
      text-white
      bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
        "
          placeholder=" "
        />
        <label
          htmlFor="test"
          className="
        absolute 
        text-md
        text-zinc-100
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      "
        >
          請大哥輸入您的信箱
        </label>
      </div>
      {/* NOTE: placeholder 會被蓋掉 */}
      <div className="relative my-5 md:w-2/3">
        <label className="block">
          <input
            type="email"
            placeholder="請大姐輸入正確的信箱格式"
            className="
          peer 
          block
          rounded-md
          py-3
          px-6
          w-full
          text-md
        text-white
        bg-neutral-700
        "
          />
          <p className="!mt-3 pl-2 invisible peer-invalid:visible text-red-600 text-sm">
            大姐您輸錯了
          </p>
        </label>
      </div>
    </>
  );
};

export default TailwindPeer;

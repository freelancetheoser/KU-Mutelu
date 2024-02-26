import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      className="flex justify-center"
      defaultValue="default"
      aria-label="View density"
    >
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[100px] focus:bg-[#005555] focus:bg-opacity-10 duration-700 outline-none cursor-default"
          value="default"
          id="standard"
        >
            <RadioGroup.Indicator className="w-full h-[20px] relative after:content-[''] after:block after:duration-700 after:w-full after:h-[5px] after:bg-[#005555]" />
            <div className='grid grid-cols-1 place-items-center mt-4 text-gray-400 hover:text-[#005555] space-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-file-image-fill" viewBox="0 0 16 16">
                    <path d="M4 0h8a2 2 0 0 1 2 2v8.293l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2m4.002 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                    <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"/>
                </svg>
                <label htmlFor="standard">
                    Standard
                </label>
            </div>
        </RadioGroup.Item>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[100px] focus:bg-[#005555] focus:bg-opacity-10 duration-700 outline-none cursor-default"
          value="comfortable"
          id="korean"
        >
            <RadioGroup.Indicator className="w-full h-[20px] relative after:content-[''] after:block after:duration-700 after:w-full after:h-[5px] after:bg-[#005555]"/>
            <div className='grid grid-cols-1 place-items-center mt-4 text-gray-400 hover:text-[#005555] space-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                </svg>
                <label htmlFor="locked">
                    Locked
                </label>
            </div>
        </RadioGroup.Item>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-[100px] focus:bg-[#005555] focus:bg-opacity-10 duration-700 outline-none cursor-default"
          value="compact"
          id="japan"
        >
            <RadioGroup.Indicator className="w-full h-[20px] relative after:content-[''] after:block after:duration-700 after:w-full after:h-[5px] after:bg-[#005555]" />
            <div className='grid grid-cols-1 place-items-center mt-4 text-gray-400 hover:text-[#005555] space-y-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                </svg>
                <label htmlFor="Gorikuya">
                    Gorikuya
                </label>
            </div>
        </RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  </form>
);

export default RadioGroupDemo;

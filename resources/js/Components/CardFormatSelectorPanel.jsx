import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

export default function RadioGroupTemplate() {
    const [selectedValue, setSelectedValue] = React.useState('default');

    return (
        <form>
            <RadioGroup.Root
            className="flex justify-center"
            defaultValue="default"
            aria-label="View density"
            value={selectedValue}
            onValueChange={setSelectedValue}
            >
            <div className="flex items-center">
                <RadioGroup.Item
                className="bg-white w-[100px] focus:bg-[#005555] focus:bg-opacity-10 duration-700 outline-none cursor-default"
                value="standard"
                id="standard"
                >
                    <RadioGroup.Indicator className="w-full h-[20px] relative after:content-[''] after:block after:duration-700 after:w-full after:h-[5px] after:bg-[#005555]" />
                    <div className='grid grid-cols-1 place-items-center mt-4 text-gray-400 hover:text-[#005555] space-y-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={selectedValue === 'standard' ? '#005555' : 'currentColor'}  className="bi bi-file-image-fill" viewBox="0 0 16 16">
                            <path d="M4 0h8a2 2 0 0 1 2 2v8.293l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2m4.002 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                            <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"/>
                        </svg>
                        <label htmlFor="standard" className={`hover:text-[#005555] font-bold ${selectedValue === 'standard' ? 'text-[#005555]' : 'text-gray-400'}`}>
                            Standard
                        </label>
                    </div>
                </RadioGroup.Item>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item
                className="bg-white w-[100px] focus:bg-[#005555] focus:bg-opacity-10 duration-700 outline-none cursor-default"
                value="locked"
                id="locked"
                >
                    <RadioGroup.Indicator className="w-full h-[20px] relative after:content-[''] after:block after:duration-700 after:w-full after:h-[5px] after:bg-[#005555]"/>
                    <div className='grid grid-cols-1 place-items-center mt-4 text-gray-400 hover:text-[#005555] space-y-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={selectedValue === 'locked' ? '#005555' : 'currentColor'}  className="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                        </svg>
                        <label htmlFor="locked" className={`hover:text-[#005555] font-bold ${selectedValue === 'locked' ? 'text-[#005555]' : 'text-gray-400'}`}>
                            Locked
                        </label>
                    </div>
                </RadioGroup.Item>
            </div>
            <div className="flex items-center">
                <RadioGroup.Item
                className="bg-white w-[100px] focus:bg-[#005555] focus:bg-opacity-10 duration-700 outline-none cursor-default"
                value="gorikuya"
                id="gorikuya"
                >
                    <RadioGroup.Indicator className="w-full h-[20px] relative after:content-[''] after:block after:duration-700 after:w-full after:h-[5px] after:bg-[#005555]" />
                    <div className='grid grid-cols-1 place-items-center mt-4 text-gray-400 hover:text-[#005555] space-y-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={selectedValue === 'gorikuya' ? '#005555' : 'currentColor'} className="bi bi-house-fill" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                        </svg>
                        <label htmlFor="gorikuya" className={`hover:text-[#005555] font-bold ${selectedValue === 'gorikuya' ? 'text-[#005555]' : 'text-gray-400'}`}>
                            Gorikuya
                        </label>
                    </div>
                </RadioGroup.Item>
            </div>
            </RadioGroup.Root>
        </form>)
}
// export default RadioGroupTemplate;


// import React from 'react';
// import * as RadioGroup from '@radix-ui/react-radio-group';

// const RadioGroupTemplate = () => {
//   // State สำหรับเก็บค่าที่ถูกเลือก
//   const [selectedValue, setSelectedValue] = React.useState('default');

//   return (
//     <form>
//       <RadioGroup.Root
//         className="flex justify-center"
//         value={selectedValue}
//         onValueChange={setSelectedValue} // เปลี่ยน state ตามค่าที่เลือก
//         aria-label="View density"
//       >
//         {/* Loop through each RadioGroup.Item */}
//         {[
//           { value: 'default', icon: 'bi-file-image-fill', label: 'Standard' },
//           { value: 'comfortable', icon: 'bi-lock-fill', label: 'Locked' },
//           { value: 'compact', icon: 'bi-house-fill', label: 'Gorikuya' },
//         ].map((item) => (

//           <div className="flex items-center" key={item.value}>
//             <RadioGroup.Item
//               className="bg-white w-[100px] focus:bg-[#005555] focus:bg-opacity-10 duration-700 outline-none cursor-default"
//               value={item.value}
//               id={item.value}
//             >
//               <RadioGroup.Indicator className="w-full h-[20px] relative after:content-[''] after:block after:duration-700 after:w-full after:h-[5px] after:bg-[#005555]" />
//               <div className='grid grid-cols-1 place-items-center mt-4 text-gray-400 hover:text-[#005555] space-y-2'>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={selectedValue === item.value ? '#005555' : 'currentColor'} className={`bi ${item.icon}`} viewBox="0 0 16 16">
//                     <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
//                     <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
//                 </svg>
//                 <label htmlFor={item.value} className={`hover:text-[#005555] font-bold ${selectedValue === item.value ? 'text-[#005555]' : 'text-gray-400'}`}>
//                   {item.label}
//                 </label>
//               </div>
//             </RadioGroup.Item>
//           </div>
//         ))}
//       </RadioGroup.Root>
//     </form>
//   );
// };

// export default RadioGroupTemplate;

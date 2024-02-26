// Customization.jsx
import React, { useState } from 'react';
import WishPreview from '@/Components/Card/WishPreview';
import { Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import FloatingActionButton from '@/Components/FloatActionButton';
import Template from '@/Layouts/Template';
import RadioGroupDemo from '@/Components/CardFormatSelectorPanel';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Customization() {
    const [backgroundColor, setBackgroundColor] = useState('bg-white');
    const [textColor, setTextColor] = useState('text-black');
    const [styleClass, setStyleClass] = useState('rounded-lg');

    return (
        <>
            <Head title="KU-MUTELU"/>
            <NavBar/>
            <div className='px-8'>
                <h3 className='text-lg font-bold text-[#005555]'>STEP 01</h3>
                <h1 className='text-2xl uppercase font-thin text-gray-400'>Card Style</h1>
                <nav className='text-gray-400 font-semibold'>
                    <ul className='flex space-x-4 mt-4'>
                        <li className='flex justify-center items-center w-6 h-6 text-sm  text-white rounded-full'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill  text-gray-400" viewBox="0 0 16 16">
                                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                </svg>
                            </span>
                        </li>
                        <li className='flex justify-center items-center w-6 h-6 text-sm bg-gray-400 text-white rounded-full'> <span>01</span></li>
                        <li className='flex justify-center items-center w-6 h-6 text-sm bg-gray-400 text-white rounded-full'> <span>02</span></li>
                        <li className='flex justify-center items-center w-6 h-6 text-sm bg-gray-400 text-white rounded-full'> <span>03</span></li>
                        <li className='flex justify-center items-center w-6 h-6 text-sm bg-gray-400 text-white rounded-full'> <span>04</span></li>
                        <li className='flex justify-center items-center w-6 h-6 text-sm  text-white rounded-full'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill text-gray-400" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='mt-4'>
                <h1 className='text-lg text-center font-bold text-[#005555]'>Standard <span className='font-light'>Card</span></h1>
                <div className='flex justify-center h-96 items-center px-4'>
                    <WishPreview
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        styleClass={styleClass}
                        />
                </div>
                <RadioGroupDemo/>
                <div className='flex justify-center mt-4'>
                    <PrimaryButton className='flex justify-center items-center bg-[#005555]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                        <span>ต่อไป</span>
                    </PrimaryButton>
                </div>
            </div>
            {/* <div className="p-5">
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full'>
                    <div className='flex justify-center'>
                        <WishPreview
                        backgroundColor={backgroundColor}
                        textColor={textColor}
                        styleClass={styleClass}
                        />
                    </div>
                    <div className="">
                        <h1 className="text-xl font-bold">Customize your Card</h1>
                        <Template/>
                        <div className="flex space-x-3 mt-3">
                            <select onChange={(e) => setBackgroundColor(e.target.value)} className="p-2 border rounded">
                            <option value="bg-gradient-to-r from-[#005555] to-[#069A8E]">เขียว</option>
                            <option value="bg-blue-500">Blue Background</option>
                            <option value="bg-green-500">Green Background</option>
                            </select>

                            <select onChange={(e) => setTextColor(e.target.value)} className="p-2 border rounded">
                            <option value="text-black">Black Text</option>
                            <option value="text-white">White Text</option>
                            <option value="text-yellow-400">Yellow Text</option>
                            </select>

                            <select onChange={(e) => setStyleClass(e.target.value)} className="p-2 border rounded">
                            <option value="rounded-lg">Rounded</option>
                            <option value="rounded-none">Square</option>
                            <option value="shadow-lg">Shadow</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div> */}
            <FloatingActionButton/>
        </>
    );
};

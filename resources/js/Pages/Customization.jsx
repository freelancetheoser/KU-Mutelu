// Customization.jsx
import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import FloatingActionButton from '@/Components/FloatActionButton';
import PrimaryButton from '@/Components/PrimaryButton';
import StepCustomization from '@/Components/StepCustomization';

export default function Customization() {
    const [customization, setCustomization] = useState({
        template: '-',
        hex: '-',
        color: '-',
        decorate: '-',
    });

    return (
        <>
            <Head title="KU-MUTELU"/>
            <NavBar/>
            <StepCustomization customization={customization} setCustomization={setCustomization}/>
            <div className='w-full flex justify-center mt-4'>
                <PrimaryButton className='flex justify-center items-center bg-[#005555]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                    <span>ต่อไป</span>
                </PrimaryButton>
            </div>
            <FloatingActionButton/>
        </>
    );
};
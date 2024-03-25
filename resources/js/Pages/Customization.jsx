// Customization.jsx
import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import FloatingActionButton from '@/Components/FloatActionButton';
import PrimaryButton from '@/Components/PrimaryButton';
import StepCustomization from '@/Components/StepCustomization';
import { useEffect } from 'react';

export default function Customization({auth}) {
    const [customization, setCustomization] = useState({
        template: 'Standard',
        background: '-',
        text: '-',
        decorate: '-',
        content:'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.' || null,
        image:'' || null
    });

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('wishData'));
        if (savedData) {
            setCustomization(prevState => ({
                ...prevState,
                content: savedData.content || prevState.content,
                image: savedData.image || prevState.image,
            }));
        }
    }, []);

    return (
        <>
            <Head title="KU-MUTELU"/>
            <NavBar auth={auth}/>
            <StepCustomization customization={customization} setCustomization={setCustomization}/>
            {/* <div className='w-full flex justify-center'>
                <img src={customization.image} alt="" />
                <PrimaryButton className='flex justify-center items-center bg-[#005555]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                    <span>ต่อไป</span>
                </PrimaryButton>
            </div> */}
             <img src={customization.image} alt="" />
            <FloatingActionButton/>
        </>
    );
};

import { useState } from "react";
import WishPreview from "@/Components/Card/WishPreview";
import PrimaryButton from "@/Components/PrimaryButton";

export default function DecorateCustom(props) {
    const [template, setTemplate] = useState('Standard Card');

    const updateDecorate = (decorate) => {
        setTemplate(decorate);
        props.onCustomizationChange({ decorate: decorate });
    };


    return(
        <div className='mt-4'>
            <h1 className='text-lg text-center font-bold text-[#005555]'>{props.customization.template}<span className='font-light'></span></h1>
            <div className='flex justify-center h-96 items-center px-4'>
                <WishPreview
                    template={props.customization.template}
                    background={props.customization.background}
                    text={props.customization.text}
                    content={props.customization.content}
                    decorate={props.customization.decorate}
                    />
            </div>
            <div className='w-full flex justify-center'>
                <PrimaryButton className='flex justify-center items-center bg-[#005555]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                    <span>เขียน</span>
                </PrimaryButton>
            </div>
        </div>
    )
}

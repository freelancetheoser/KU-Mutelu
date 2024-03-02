import { useState } from "react";
import WishPreview from "@/Components/Card/WishPreview";

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
                    decorate={props.customization.decorate}
                    />
            </div>
        </div>
    )
}

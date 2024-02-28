import WishPreview from "@/Components/Card/WishPreview";
import RadioGroupBackground from "@/Components/RadioGroupBackground";
import { useState } from "react";

export default function BackgroundCustom(props) {
    const [background, setBackground] = useState('Standard Card');

    const updateBackground = (background) => {
        setBackground(background);
        props.onCustomizationChange({ background: background });
    };

    return(
        <div className='mt-4'>
            <h1 className='text-lg text-center font-bold text-[#005555]'>{props.customization.template}<span className='font-light'></span></h1>
            <div className='flex justify-center h-96 items-center px-4'>
                <WishPreview
                template={props.customization.template}
                background={background}/>
            </div>
            <RadioGroupBackground onUpdateBackground={updateBackground}/>
        </div>
    )
}

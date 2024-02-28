import WishPreview from "@/Components/Card/WishPreview";
import RadioGroupBackground from "@/Components/RadioGroupBackground";
import { useState } from "react";

export default function BackgroundCustom(props) {
    const [backgroundColor, setBackgroundColor] = useState('bg-white');
    const [textColor, setTextColor] = useState('text-black');
    const [styleClass, setStyleClass] = useState('rounded-lg');
    const [Hex, setHex] = useState('Standard Card');

    const updateHex = (hex) => {
        setHex(hex);
        props.onCustomizationChange({ hex: hex });
    };

    return(
        <div className='mt-4'>
            <h1 className='text-lg text-center font-bold text-[#005555]'>{Hex}<span className='font-light'></span></h1>
            <div className='flex justify-center h-96 items-center px-4'>
                <WishPreview
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    styleClass={styleClass}
                    />
            </div>
            <RadioGroupBackground onUpdateHex={updateHex}/>
        </div>
    )
}

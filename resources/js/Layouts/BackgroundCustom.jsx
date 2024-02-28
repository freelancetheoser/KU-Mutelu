import WishPreview from "@/Components/Card/WishPreview";
import RadioGroupBackground from "@/Components/RadioGroupBackground";
import { useState } from "react";

export default function BackgroundCustom() {
    const [backgroundColor, setBackgroundColor] = useState('bg-white');
    const [textColor, setTextColor] = useState('text-black');
    const [styleClass, setStyleClass] = useState('rounded-lg');
    const [h1Text, setH1Text] = useState('Standard Card');

    const updateH1Text = (newText) => {
        setH1Text(newText);
    };
    
    return(
        <div className='mt-4'>
            <h1 className='text-lg text-center font-bold text-[#005555]'>{h1Text}<span className='font-light'></span></h1>
            <div className='flex justify-center h-96 items-center px-4'>
                <WishPreview
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    styleClass={styleClass}
                    />
            </div>
            <RadioGroupBackground onUpdateH1={updateH1Text}/>
        </div>
    )
}

import { useState } from "react";
import WishPreview from "@/Components/Card/WishPreview";
import RadioGroupTemplate from "@/Components/RadioGroupTemplate";
import RadioGroupText from "@/Components/RadioGroupText";

export default function TextCustom(props) {
    const [text, setText] = useState('Standard Card');

    const updateText = (text) => {
        setText(text);
        props.onCustomizationChange({ text: text });
    };
    console.log(props.customization);

    return(
        <div className='mt-4'>
            <h1 className='text-lg text-center font-bold text-[#005555]'>{props.customization.template}<span className='font-light'></span></h1>
            <div className='flex justify-center h-96 items-center px-4'>
                <WishPreview
                    template={props.customization.template}
                    background={props.customization.background}
                    text={props.customization.text}
                    content={props.customization.content}
                    />
            </div>
            <RadioGroupText onUpdateText={updateText}/>
        </div>
    )
}

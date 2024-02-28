import { useState } from "react";
import WishPreview from "@/Components/Card/WishPreview";
import RadioGroupTemplate from "@/Components/RadioGroupTemplate";

export default function CardCustom(props) {
    const [backgroundColor, setBackgroundColor] = useState('bg-white');
    const [textColor, setTextColor] = useState('text-black');
    const [styleClass, setStyleClass] = useState('rounded-lg');
    const [template, setTemplate] = useState('Standard Card');

    const updateTemplate = (template) => {
        setTemplate(template);
        props.onCustomizationChange({ template: template });
    };


    return(
        <div className='mt-4'>
            <h1 className='text-lg text-center font-bold text-[#005555]'>{template}<span className='font-light'></span></h1>
            <div className='flex justify-center h-96 items-center px-4'>
                <WishPreview
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    styleClass={styleClass}
                    template={template}
                    />
            </div>
            <RadioGroupTemplate onUpdateTemplate={updateTemplate}/>
        </div>
    )
}

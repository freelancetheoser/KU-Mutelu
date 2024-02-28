import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

export default function RadioGroupText({ onUpdateText }) {
    const [selectedText, setSelectedText] = React.useState('serif');

    const handleTextChange = (value) => {
        setSelectedText(value);
        onUpdateText(value); // This function should update the font style in the preview area.
    };

    return (
        <form>
            <RadioGroup.Root
                className="flex justify-center"
                defaultValue="serif"
                aria-label="Font style"
                value={selectedText}
                onValueChange={handleTextChange}
            >
                <RadioGroup.Item
                    className="option h-20 w-20"
                    value="Sarabun-fon"
                    id="sarabun"
                >
                    <RadioGroup.Indicator />
                    <label id='Sarabun-fon' htmlFor="roboto" className='text-2xl'>Aa</label>
                </RadioGroup.Item>
                <RadioGroup.Item
                    className="option h-20 w-20"
                    value="Kanit-Font"
                    id="kanit"
                >
                    <RadioGroup.Indicator />
                    <label id='Kanit-Font' htmlFor="kanit" className='text-2xl'>Aa</label>
                </RadioGroup.Item>
                <RadioGroup.Item
                    className="option h-20 w-20"
                    value="Charmonman-font"
                    id="charmonman"
                >
                    <RadioGroup.Indicator />
                    <label id='Charmonman-font' htmlFor="charmonman" className='text-2xl'>Aa</label>
                </RadioGroup.Item>
            </RadioGroup.Root>
        </form>
    );
}

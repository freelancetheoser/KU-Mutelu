import React, { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

export default function BackgroundColorSelector({ onUpdateBackground }) {
    const [selectedValue, setSelectedValue] = useState('red'); // กำหนดค่าเริ่มต้น
    const [customColor, setCustomColor] = useState('#'); // สำหรับสีพิเศษ

    const colors = [
        { name: 'red', gradient: 'linear-gradient(135deg , #FF0000, #FF6347)' },
        { name: 'orange', gradient: 'linear-gradient(135deg , #FFA500, #FF7F50)' },
        { name: 'green', gradient: 'linear-gradient(135deg , #005555, #069A8E)' },
        { name: 'blue', gradient: 'linear-gradient(135deg , #0000FF, #1E90FF)' },
        { name: 'purple', gradient: 'linear-gradient(135deg , #800080, #DA70D6)' },
        { name: 'pink', gradient: 'linear-gradient(135deg , #FFC0CB, #FFB6C1)' },
        { name: 'custom', hex: '' } // สำหรับสีที่ป้อนเอง
    ];


    const handleValueChange = (value) => {
        setSelectedValue(value);
        if (value === 'custom') {
            // ใช้ customColor ที่ user ป้อน
            onUpdateBackground(customColor);
        } else {
            // อัพเดตพื้นหลังตามค่าสีที่เลือก
            onUpdateBackground(value);
        }
    };

    const handleCustomColorChange = (event) => {
        const color = event.target.value;
        setCustomColor(color);
        if (selectedValue === 'custom') {
            onUpdateBackground(color);
        }
    };

    return (
        <form>
            <RadioGroup.Root
                className="flex flex-wrap justify-center gap-4"
                defaultValue="red"
                aria-label="Select background color"
                value={selectedValue}
                onValueChange={handleValueChange}
            >
            {colors.map(({ name, gradient}) => (
                name !== 'custom'
                    ? <RadioGroup.Item
                        key={name}
                        className="w-12 h-12 rounded-full cursor-pointer"
                        value={gradient}
                        id={name}
                        style={{ backgroundImage: gradient, aspectRatio: '1 / 1' }} // ใช้ gradient ที่นี่
                    >
                        {/* RadioGroup.Indicator และเนื้อหาอื่นๆ */}
                    </RadioGroup.Item>
                    : <div key={name} className="flex flex-col items-center">
                        <RadioGroup.Item
                            className=" w-12 h-12 rounded-full cursor-pointer bg-gray-200"
                            value={name}
                            id="custom"
                            style={{ aspectRatio: '1 / 1' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-image mx-auto mt-4" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            <input
                                type="color"
                                value={customColor}
                                onChange={handleCustomColorChange}
                                className="w-full h-full opacity-0 cursor-pointer"
                            />
                        </RadioGroup.Item>
                        <label htmlFor="custom" className="mt-2 text-gray-500">
                            เพิ่มรูป
                        </label>
                    </div>
            ))}

            </RadioGroup.Root>
        </form>
    );
}

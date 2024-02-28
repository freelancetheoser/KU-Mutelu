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
                className="flex flex-wrap justify-center gap-4 p-4"
                defaultValue="red"
                aria-label="Select background color"
                value={selectedValue}
                onValueChange={handleValueChange}
            >
            {colors.map(({ name, gradient}) => (
                name !== 'custom'
                    ? <RadioGroup.Item
                        key={name}
                        className="w-20 h-20 cursor-pointer"
                        value={gradient}
                        id={name}
                        style={{ backgroundImage: gradient, aspectRatio: '1 / 1' }} // ใช้ gradient ที่นี่
                    >
                        {/* RadioGroup.Indicator และเนื้อหาอื่นๆ */}
                    </RadioGroup.Item>
                    : <div key={name} className="flex flex-col items-center">
                        <RadioGroup.Item
                            className="w-20 h-20 cursor-pointer bg-gray-200"
                            value={name}
                            id="custom"
                            style={{ aspectRatio: '1 / 1' }}
                        >
                            <input
                                type="color"
                                value={customColor}
                                onChange={handleCustomColorChange}
                                className="w-full h-full opacity-0 cursor-pointer"
                            />
                        </RadioGroup.Item>
                        <label htmlFor="custom" className="mt-2 text-gray-500">
                            Custom Color
                        </label>
                    </div>
            ))}

            </RadioGroup.Root>
        </form>
    );
}

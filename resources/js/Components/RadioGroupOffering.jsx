import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

export default function RadioGroupOffering({ onUpdateOffering, setData }) {
    const [selectedValue, setSelectedValue] = React.useState('default');

    const offeringItems = [
        { id: 'eggs', value: 'ไข่ต้ม', image: '/images/offerings/eggs.png' },
        { id: 'fruit', value: 'ผลไม้', image: '/images/offerings/fruit.png' },
        { id: 'incense', value: 'ธูป', image: '/images/offerings/incense.png' },
        { id: 'lotus-flower', value: 'ตอกบัว', image: '/images/offerings/lotus-flower.png' },
        { id: 'pig', value: 'หัวหมู', image: '/images/offerings/pig.png' },
        { id: 'pray', value: 'ไหว้', image: '/images/offerings/pray.png' },
        { id: 'RedFanta', value: 'น้ำแดง', image: '/images/offerings/RedFanta.png' },
        { id: 'roast-chicken', value: 'ไก่ต้ม', image: '/images/offerings/roast-chicken.png' },
    ];

    const handleValueChange = (value) => {
        setSelectedValue(value);
        setData('offering', value); // อัพเดตข้อมูลในตัวแปร offering ให้เป็นค่าที่เลือก
        // ตรวจสอบค่าที่เลือกและเรียกใช้ onUpdateH1 ด้วยข้อความที่ต้องการ
        switch (value) {
            case 'standard':
                onUpdateOffering('Standard'); // อัพเดตข้อความหรือค่าที่ต้องการ
                break;
            case 'locked':
                onUpdateOffering('Locked');
                break;
            case 'gorikuya':
                onUpdateOffering('Gorikuya');
                break;
            default:
                onUpdateOffering('Standard');
        }
    };

    return (
        <form>
            <RadioGroup.Root
            className="flex justify-center"
            defaultValue="default"
            aria-label="View density"
            value={selectedValue}
            onValueChange={handleValueChange}
            >
               {offeringItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <RadioGroup.Item
                            className="bg-white w-[100px] focus:bg-[#005555] m-4 focus:bg-opacity-10 duration-700 outline-none cursor-default"
                            value={item.id}
                            id={item.id}
                        >
                            <RadioGroup.Indicator className="w-full h-[20px] relative after:content-[''] after:block after:duration-700 after:w-full after:h-[5px] after:bg-[#005555]" />
                            <div className='grid grid-cols-1 place-items-center mt-4 text-gray-400 hover:text-[#005555] space-y-2'>
                                <img src={item.image} alt={item.label} />
                                <label htmlFor={item.id} className={`hover:text-[#005555] font-bold ${selectedValue === item.id ? 'text-[#005555]' : 'text-gray-400'}`}>
                                    {item.value}
                                </label>
                            </div>
                        </RadioGroup.Item>
                    </div>
                ))}
            </RadioGroup.Root>
        </form>)
}

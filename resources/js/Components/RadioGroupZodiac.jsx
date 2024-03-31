import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

export default function RadioGroupZodia({ onUpdateOffering }) {
    const [selectedValue, setSelectedValue] = React.useState('-');

    const zodiac = [
        { id: '01', value: 'มังกร', image: '../images/zodiac/01_Capricorn.png' },
        { id: '02', value: 'กุมภ์', image: '../images/zodiac/02_Aquarius.png' },
        { id: '03', value: 'มีน', image: '../images/zodiac/03_Pisces.png' },
        { id: '04', value: 'เมษ', image: '../images/zodiac/04_Aries.png' },
        { id: '05', value: 'พฤษก', image: '../images/zodiac/05_Taurus.png' },
        { id: '06', value: 'เมถุน', image: '../images/zodiac/06_Gemini.png' },
        { id: '07', value: 'กรกฎ', image: '../images/zodiac/07_Cancer.png' },
        { id: '08', value: 'สิงห์', image: '../images/zodiac/08_Leo.png' },
        { id: '09', value: 'กันย์', image: '../images/zodiac/09_Virgo.png' },
        { id: '10', value: 'ตุลย์', image: '../images/zodiac/10_Libra.png' },
        { id: '11', value: 'พิจิก', image: '../images/zodiac/11_Scorpio.png' },
        { id: '12', value: 'ธนู', image: '../images/zodiac/12_Sagittarius.png' },
    ];

    const handleValueChange = (value) => {
        setSelectedValue(value);
        // ตรวจสอบค่าที่เลือกและเรียกใช้ onUpdateH1 ด้วยข้อความที่ต้องการ
        switch (value) {
            case 'มังกร':
                onUpdateOffering('มังกร');
                break;
            case 'กุมภ์':
                onUpdateOffering('กุมภ์');
                break;
            case 'มีน':
                onUpdateOffering('มีน');
                break;
            case 'เมษ':
                onUpdateOffering('เมษ');
                break;
            case 'พฤษก':
                onUpdateOffering('พฤษก');
                break;
            case 'เมถุน':
                onUpdateOffering('เมถุน');
                break;
            case 'กรกฎ':
                onUpdateOffering('กรกฎ');
                break;
            case 'สิงห์':
                onUpdateOffering('สิงห์');
                break;
            case 'กันย์':
                onUpdateOffering('กันย์');
                break;
            case 'ตุลย์':
                onUpdateOffering('ตุลย์');
                break;
            case 'พิจิก':
                onUpdateOffering('พิจิก');
                break;
            case 'ธนู':
                onUpdateOffering('ธนู');
                break;
            default:
                onUpdateOffering('-');
        }
    };

    return (
            <RadioGroup.Root
            className="flex justify-start"
            defaultValue="-"
            aria-label="View density"
            value={selectedValue}
            onValueChange={handleValueChange}
            >
               {zodiac.map((item, index) => (
                    <div key={index} className="flex justify-start items-center">
                        <RadioGroup.Item
                            className="w-[40px] focus:bg-[#005555] m-4 focus:bg-opacity-10 duration-700 outline-none cursor-default"
                            value={item.value}
                            id={item.id}
                        >
                            {/* <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative  after:block after:w-[11px] after:h-[11px]  after:bg-violet11" /> */}
                            <div className='grid grid-cols-1 place-items-center mt-4 text-gray-400 hover:text-[#005555] space-y-2'>
                                <img src={item.image} alt={item.label} className='rounded-full '/>
                                <div className='flex items-center space-x-2'>
                                    <RadioGroup.Indicator className="flex justify-center w-full relative after:content-[''] after:block after:duration-700 after:w-[16px] after:h-[16px]  after:w-full after:rounded-[50%] after:bg-white" />
                                    <label htmlFor={item.id} className={`text-white text-md font-bold ${selectedValue === item.value ? 'text-[#005555]' : 'text-white'}`}>
                                        {item.value}
                                    </label>
                                </div>
                                {/* <p>{selectedValue}</p> */}
                            </div>
                        </RadioGroup.Item>
                    </div>
                ))}
            </RadioGroup.Root>
    )
}

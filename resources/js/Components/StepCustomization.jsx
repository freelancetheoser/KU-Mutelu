import React, { useState } from 'react';
import CardCustom from '../Layouts/CardCustom';
import BackgroundCustom from '../Layouts/BackgroundCustom';
import TextCustom from '../Layouts/TextCustom';
import DecorateCustom from '../Layouts/DecorateCustom';
import ProceedAlertModal from './Modal/ProceedAlertModal';

function StepCustomization({ customization, setCustomization }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const goToStep = (step) => {

        if (currentStep === 1 && customization.template === '-') {
            setIsModalOpen(true);
            return; // หยุดการทำงานของฟังก์ชันถ้าไม่ได้เลือก template
        }
        if (currentStep === 2 && customization.background === '-') {
            setIsModalOpen(true);
            return; // หยุดการทำงานของฟังก์ชันถ้าไม่ได้เลือก template
        }
        if (currentStep === 3 && customization.text === '-') {
            setIsModalOpen(true);
            return; // หยุดการทำงานของฟังก์ชันถ้าไม่ได้เลือก template
        }
        setCurrentStep(step);
    };

    const handleCustomizationChange = (newValues) => {
        setCustomization({ ...customization, ...newValues });
    };

    const preventStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        } else {
            // หากอยู่ที่ขั้นตอนสุดท้ายและต้องการทำอะไรเมื่อการปรับแต่งเสร็จสิ้น (ตัวเลือก)
            console.log("Customization complete!");
        }
    };

    const steps = [
        { id: 1, name: 'Card Style', component: CardCustom },
        { id: 2, name: 'Background', component: BackgroundCustom },
        { id: 3, name: 'Text Style', component: TextCustom },
        { id: 4, name: 'Decorate', component: DecorateCustom },
    ];


  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CardCustom onNext={() => goToStep(2)} customization={customization} onCustomizationChange={handleCustomizationChange} />;
      case 2:
        return <BackgroundCustom onNext={() => goToStep(3)} customization={customization} onCustomizationChange={handleCustomizationChange} />;
      case 3:
        return <TextCustom onNext={() => goToStep(4)} customization={customization} onCustomizationChange={handleCustomizationChange} />;
      case 4:
        return <DecorateCustom onNext={() => goToStep(1)} customization={customization} onCustomizationChange={handleCustomizationChange} />;
      default:
        return <div>Customization Complete</div>;
    }
  };

    return (
        <div className='px-8'>
            <div className='grid grid-cols-2'>
                <div>
                    <h3 className='text-lg font-bold text-[#005555]'>STEP 0{currentStep}</h3>
                    <h1 className='text-2xl uppercase font-thin text-gray-400'>{steps.find(step => step.id === currentStep)?.name}</h1>
                    <nav className='text-gray-400 font-semibold'>
                        <ul className='flex space-x-4 mt-4'>
                            <li className='flex justify-center items-center w-6 h-6 text-sm  text-white rounded-full'>
                                <button onClick={() => preventStep()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill  text-gray-400" viewBox="0 0 16 16">
                                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                    </svg>
                                </button>
                            </li>
                            {steps.map((step) => (
                                <li key={step.id} className={`flex justify-center items-center w-6 h-6 text-sm ${currentStep > step.id ? 'bg-[#005555]' : 'bg-gray-400'} text-white rounded-full`}>
                                    <button onClick={() => goToStep(step.id)}>
                                        {currentStep > step.id ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                                            </svg>
                                        ) : step.id.toString().padStart(2, '0')}
                                    </button>
                                </li>
                            ))}
                            <li className='flex justify-center items-center w-6 h-6 text-sm  text-white rounded-full'>
                                <button onClick={() => nextStep()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill text-gray-400" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex justify-end w-full'>
                    <div>
                        <h1> Template: {customization.template}</h1>
                        <h1> Background: {customization.background}</h1>
                        <h1> Text: {customization.text}</h1>
                        <h1> Decorate: {customization.decorate}</h1>
                    </div>
                </div>
            </div>
            <div>
                {renderStep()}
            </div>
            <ProceedAlertModal isOpen={isModalOpen} onDismiss={() => setIsModalOpen(false)}/>
        </div>
    );
}

export default StepCustomization;


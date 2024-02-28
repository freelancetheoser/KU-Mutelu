import React, { useState } from 'react';
import CardCustom from '../Layouts/CardCustom';
import BackgroundCustom from '../Layouts/BackgroundCustom';
import TextCustom from '../Layouts/TextCustom';
import DecorateCustom from '../Layouts/DecorateCustom';

function StepCustomization({ customization, setCustomization }) {
    const [currentStep, setCurrentStep] = useState(1);

    // const [customization, setCustomization] = useState({
    //     template: '',
    //     hex: '',
    //     color: '',
    //     decorate: '',
    // });

    const goToStep = (step) => {
        setCurrentStep(step);
    };

    const handleCustomizationChange = (newValues) => {
        setCustomization({ ...customization, ...newValues });
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
        return <CardCustom onNext={() => goToStep(2)} onCustomizationChange={handleCustomizationChange} />;
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
                    <h3 className='text-lg font-bold text-[#005555]'>STEP 0{currentStep} Template: {customization.template}</h3>
                    <h1 className='text-2xl uppercase font-thin text-gray-400'>{steps.find(step => step.id === currentStep)?.name}</h1>
                    <nav className='text-gray-400 font-semibold'>
                        <ul className='flex space-x-4 mt-4'>
                            <li className='flex justify-center items-center w-6 h-6 text-sm  text-white rounded-full'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill  text-gray-400" viewBox="0 0 16 16">
                                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                    </svg>
                                </span>
                            </li>
                            <li className='flex justify-center items-center w-6 h-6 text-sm bg-gray-400 text-white rounded-full'>
                                <button onClick={() => goToStep(1)}>01</button>
                            </li>
                            <li className='flex justify-center items-center w-6 h-6 text-sm bg-gray-400 text-white rounded-full'>
                                <button onClick={() => goToStep(2)}>02</button>
                            </li>
                            <li className='flex justify-center items-center w-6 h-6 text-sm bg-gray-400 text-white rounded-full'>
                                <button onClick={() => goToStep(3)}>03</button>
                            </li>
                            <li className='flex justify-center items-center w-6 h-6 text-sm bg-gray-400 text-white rounded-full'>
                                <button onClick={() => goToStep(4)}>04</button>
                            </li>
                            <li className='flex justify-center items-center w-6 h-6 text-sm  text-white rounded-full'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill text-gray-400" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex justify-end w-full'>
                    <div>
                        <h1> Template: {customization.template}</h1>
                        <h1> Background: {customization.hex}</h1>
                        <h1> Text: {customization.color}</h1>
                        <h1> Decorate: {customization.decorate}</h1>
                    </div>
                </div>
            </div>
            <div>
                {renderStep()}
            </div>
        </div>
    );
}

export default StepCustomization;


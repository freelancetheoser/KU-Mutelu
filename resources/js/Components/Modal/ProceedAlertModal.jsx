import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import PrimaryButton from '../PrimaryButton';

const ProceedAlertModal = ({ isOpen, onDismiss }) => {
    return (
        <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
            <Dialog.Trigger />
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg">
                    <Dialog.Title className="text-lg font-bold">แจ้งเตือน</Dialog.Title>
                    <Dialog.Description className="mt-2">
                        กรุณาเสร็จสิ้นขั้นตอนปัจจุบันก่อนที่จะดำเนินการต่อไป.
                    </Dialog.Description>
                    <div className="mt-4 flex justify-center">
                        <Dialog.Close className="px-4 py-2">
                            <PrimaryButton>
                                รับทราบ
                            </PrimaryButton>
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ProceedAlertModal;

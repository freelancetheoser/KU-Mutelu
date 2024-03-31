import {Modal} from "flowbite-react";

export default function WishModal({openModal, setOpenModal, wishModalData}) {
    console.log(wishModalData)
    return (
        <Modal
            dismissable
            show={openModal}
            onClose={() => setOpenModal(false)}
            size="8xl"
            theme={{
                root: {
                    base: "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
                    show: {
                        on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
                        off: "hidden"
                    }
                },
                header: {
                    close: {
                        base: "hidden"
                    }
                },
                body: {
                    base: "p-6 flex-1 overflow-auto",
                }
            }}
        >
            <Modal.Header>
                <h2 className="text-xl font-bold">Wish</h2>
            </Modal.Header>
            <Modal.Body>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-600">Name</label>
                        <span className="text-lg font-semibold">{wishModalData.content}</span>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

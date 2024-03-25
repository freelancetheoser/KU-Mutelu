import FloatingActionButton from '@/Components/FloatActionButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WishHallViewer from '@/Layouts/WishHallViewer';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="KU-MUTELU"/>
            <div className="flex flex-col w-full h-screen">
                <div className="flex-grow">
                    <WishHallViewer />
                </div>

                <FloatingActionButton/>
            </div>
        </AuthenticatedLayout>

    );
}

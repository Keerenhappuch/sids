import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
            <section class="calendar-section">
                <h2>Academic Schedule</h2>
                <div id="calendar"></div>
                <div class="event-list">
                    <h3>Class Schedule</h3>
                    <ul>
                        <li>
                            <h4>Math Class</h4>
                            <p>2024-09-02</p>
                            <p>08:00 AM - 09:30 AM</p>
                        </li>
                        <li>
                            <h4>English Class</h4>
                            <p>2024-09-03</p>
                            <p>10:00 AM - 11:30 AM</p>
                        </li>
                        <li>
                            <h4>Basic Science Class</h4>
                            <p>2024-09-04</p>
                            <p>12:00 PM - 01:30 PM</p>
                        </li>
                        <li>
                            <h4>Civic Class</h4>
                            <p>2024-09-05</p>
                            <p>02:00 PM - 03:30 PM</p>
                        </li>
                    </ul>
                </div>
            </section>
            </div>
        </AuthenticatedLayout>
    );
}

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
            <section class="announcement-section">
                <h2>Announcements</h2>
                <div class="announcements">
                    <div class="announcement">
                        <h3>PTA Meeting</h3>
                        <p>Date: 2024-09-10</p>
                        <p>Time: 05:00 PM - 06:30 PM</p>
                        <p>Location: School Auditorium</p>
                        <p>Details: All parents and teachers are invited to discuss the progress of the school and future plans.</p>
                    </div>
                    <div class="announcement">
                        <h3>School Sports Day</h3>
                        <p>Date: 2024-09-20</p>
                        <p>Time: 09:00 AM - 03:00 PM</p>
                        <p>Location: School Sports Ground</p>
                        <p>Details: Join us for a day of fun and sports activities. All students and parents are encouraged to participate.</p>
                    </div>
                    <div class="announcement">
                        <h3>End of the Year Party</h3>
                        <p>Date: 2024-12-15</p>
                        <p>Time: 06:00 PM - 09:00 PM</p>
                        <p>Location: School Cafeteria</p>
                        <p>Details: Celebrate the end of the school year with a party featuring music, food, and games. Open to all students.</p>
                    </div>
                    <div class="announcement">
                        <h3>Science Fair</h3>
                        <p>Date: 2024-11-05</p>
                        <p>Time: 10:00 AM - 02:00 PM</p>
                        <p>Location: School Hall</p>
                        <p>Details: Showcase your science projects and experiments. All students from grades 6-12 are welcome to participate.</p>
                    </div>
                    <div class="announcement">
                        <h3>News Feed</h3>
                        <ul>
                            <li><p>New library books have arrived. Check them out today!</p></li>
                            <li><p>Congratulations to the soccer team for winning the regional championship!</p></li>
                            <li><p>Upcoming holiday on 2024-10-02 for national observance.</p></li>
                        </ul>
                    </div>
                </div>
            </section>
            </div>
        </AuthenticatedLayout>
    );
}

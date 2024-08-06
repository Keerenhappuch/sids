import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <section class="welcome-section">
                <div class="notice-board">
                    <h2>Welcome back, Olamide!</h2>
                    <p>Notice Board</p>
                    <div class="notices">
                        <div class="notice">
                            <h4>Notice of PTA Meeting</h4>
							<p> There would be PTA Meeting this Friday, 9th of August, 2024. See you there, Parents!</p>
                        </div>
                        <div class="notice">
                            <h4>Time Extension Notice of Late Payment</h4>
							<p> Deadline for payment is now Monday, 12th August, 2024!</p>
                        </div>
                        <div class="notice">
                            <h4>Extra Study Material Uploaded</h4>        
							<p> Study Material uploaded!</p>
                        </div>
                    </div>
                </div>
                <div class="calendar">
                    <h3>Atttendance</h3>
                    <div id="calendar"></div>
                </div>
            </section>
            <section class="assignments-exams-schedule">
                <div class="assignments-section">
                    <h3>Assignments</h3>
                    <div class="assignments">
                        <div class="assignment">
                            <h4>Mathematics</h4>
                            <p>11/30 | 2024</p>
                            <span class="status due">Due</span>
                        </div>
                        <div class="assignment">
                            <h4>English Language</h4>
                            <p>12/05 | 2021</p>
                            <span class="status upcoming">Upcoming</span>
                        </div>
                        <div class="assignment">
                            <h4>Basic Technology</h4>
                            <p>12/10 | 2024</p>
                            <span class="status submitted">Submitted</span>
                        </div>
                    </div>
                </div>
                <div class="exams-section">
                    <h3>Exams</h3>
                    <div class="exams">
                        <div class="exam">
                            <h4>Mathematics, English and Agric</h4>
                            <p>12/12/2024 - 12/14/2024</p>
                            <p>Location: Online</p>
                        </div>
                        <div class="exam">
                            <h4>French, Computer and Social Studies</h4>
                            <p>12/20/2024 - 12/22/2024</p>
                            <p>Location: Class Q</p>
                        </div>
                    </div>
                </div>
                <div class="schedule-section">
                    <h3>Schedule</h3>
                    <div class="schedule">
                        <div class="schedule-item">
                            <p>09:00 - 10:30</p>
                            <p>Mathematics</p>
                        </div>
                        <div class="schedule-item">
                            <p>11:00 - 12:30</p>
                            <p>Agric Science</p>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}

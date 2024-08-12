import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayouts";
import { Head, useForm, usePage } from "@inertiajs/react";
import { AnnouncementSection } from "@/Components/admin/AnnouncementSection.jsx";
import { MaterialsSection } from "@/Components/admin/MaterialsSection.jsx";
import { Result } from "postcss";
import { ResultsSection } from "@/Components/admin/ResultsSection.jsx";
import { AssignmentsSection } from "@/Components/admin/AssignmentsSection.jsx";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />
            <div className="py-12"></div>
            <div class="tab-nav">
                <button class="tab-link active" data-tab="assignments">
                    Assignments
                </button>
                <button class="tab-link" data-tab="results">
                    Results
                </button>
                <button class="tab-link" data-tab="announcements">
                    Announcements
                </button>
                <button class="tab-link" data-tab="materials">
                    Study Materials
                </button>
                <button class="tab-link logout-button" onclick="logout()">
                    Logout
                </button>
            </div>
            <AssignmentsSection />
            <ResultsSection />
            <AnnouncementSection />
            <MaterialsSection />
        </AdminAuthenticatedLayout>
    );
}

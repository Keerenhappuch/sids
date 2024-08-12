import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Edit({ auth, mustVerifyEmail, status }) {
    const { announcements } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12">
                <section class="announcement-section">
                    <h2>Announcements</h2>
                    {announcements && announcements.length > 0 && (
                        <>
                            {announcements.map((announcement, index) => (
                                <>
                                    <div className="announcements">
                                        <div className="announcement">
                                            <h3>{announcement.title}</h3>
                                            <p>
                                                Date:{" "}
                                                {new Intl.DateTimeFormat(
                                                    "en-US",
                                                    {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "2-digit",
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                        hour12: true,
                                                    },
                                                ).format(
                                                    new Date(
                                                        announcement.created_at,
                                                    ),
                                                )}
                                            </p>
                                            <p>
                                                Details:{" "}
                                                {announcement.description}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </>
                    )}
                </section>
            </div>
        </AuthenticatedLayout>
    );
}

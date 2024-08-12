import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import { Textarea } from "@headlessui/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { useForm, usePage } from "@inertiajs/react";

export function AnnouncementSection() {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
    });

    const submitForm = (e) => {
        e.preventDefault();

        post("/create-announcement", {
            onFinish: () => reset("title", "description"),
        });
    };

    return (
        <>
            <section id="announcements-section" className="tab-content">
                <section className="admin-section">
                    <h2>Post Announcements</h2>
                    <form onSubmit={submitForm}>
                        {flash && flash.success && (
                            <>
                                <div
                                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                                    role="alert"
                                >
                                    <strong className="font-bold">
                                        Success!
                                    </strong>
                                    <span className="block sm:inline">
                                        {flash.success}
                                    </span>
                                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                                </div>
                            </>
                        )}
                        <InputLabel for="announcement-title">Title</InputLabel>
                        <TextInput
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            isFocused={true}
                            id="announcement-title"
                            name="announcement-title"
                            required
                        />

                        <InputLabel for="announcement-description">
                            Description
                        </InputLabel>
                        <Textarea
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            id="announcement-description"
                            name="announcement-description"
                            rows="4"
                            required
                        ></Textarea>

                        <PrimaryButton disabled={processing}>
                            Post Announcement
                        </PrimaryButton>
                    </form>
                </section>
            </section>
        </>
    );
}

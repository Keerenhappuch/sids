import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayouts';
import { Head, useForm, usePage } from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {Textarea} from "@headlessui/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Edit({ auth, mustVerifyEmail, status }) {
    const { flash } = usePage().props

    const {data, setData, post, processing, errors, reset} = useForm({
        title: '',
        description: '',
    })

    const submitForm = (e) => {
        e.preventDefault();

        post('/create-announcement', {
            onFinish: () => reset('title','description')
        });
    }

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />
            <div className="py-12"></div>
            <div class="tab-nav">
            <button class="tab-link active" data-tab="assignments">Assignments</button>
            <button class="tab-link" data-tab="results">Results</button>
            <button class="tab-link" data-tab="announcements">Announcements</button>
            <button class="tab-link" data-tab="materials">Study Materials</button>
            <button class="tab-link logout-button" onclick="logout()">Logout</button>
        </div>
            <section id="assignments-section" class="tab-content active"/>
                 <section class="admin-section"></section>
                <h2>Upload Assignments</h2>
                <form/>
                    <label for="assignment-title">Title</label>
                    <input type="text" id="assignment-title" name="assignment-title" required/>

                    <label for="assignment-description">Description</label>
                    <textarea id="assignment-description" name="assignment-description" rows="4" required></textarea>

                    <label for="assignment-file">Upload File</label>
                    <input type="file" id="assignment-file" name="assignment-file" required/>

                    <button type="submit">Upload Assignment</button>
                <form/>
            <section/>
            <section id="results-section" class="tab-content"/>
                 <section class="admin-section"></section>
                <h2>Post Results</h2>
                <form/>
                    <label for="student-name">Student Name</label>
                    <input type="text" id="student-name" name="student-name" required/>

                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required/>

                    <label for="test-score">Test Score (30)</label>
                    <input type="number" id="test-score" name="test-score" required/>

                    <label for="exam-score">Exam Score (70)</label>
                    <input type="number" id="exam-score" name="exam-score" required/>

                    <label for="remark">Remark</label>
                    <input type="text" id="remark" name="remark" required/>

                    <button type="submit">Post Result</button>
                <form/>
            <section/>
            <section id="announcements-section" class="tab-content">
                 <section class="admin-section"></section>
                <h2>Post Announcements</h2>
                <form onSubmit={submitForm}>
                    {flash && flash.success && (
                        <>
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                                 role="alert">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline">{flash.success}</span>
                                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            </span>
                            </div>
                        </>
                    )}
                    <InputLabel for="announcement-title">Title</InputLabel>
                    <TextInput
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        isFocused={true}
                        id="announcement-title"
                        name="announcement-title"
                        required
                    />

                    <InputLabel for="announcement-description">Description</InputLabel>
                    <Textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        id="announcement-description"
                        name="announcement-description"
                        rows="4" required>

                    </Textarea>

                    <PrimaryButton disabled={processing}>Post Announcement</PrimaryButton>
                </form>
            </section>
            <section id="materials-section" class="tab-content"/>
             <section class="admin-section"></section>
            <h2>Post Study Materials</h2>
            <form/>
            <label for="material-title">Title</label>
            <input type="text" id="material-title" name="material-title" required/>

            <label for="material-description">Description</label>
            <textarea id="material-description" name="material-description" rows="4" required></textarea>

            <label for="material-file">Upload File</label>
            <input type="file" id="material-file" name="material-file" required/>

                    <button type="submit">Post Study Material</button>
                <form/>
            <section/>
            </AdminAuthenticatedLayout>
    );
}

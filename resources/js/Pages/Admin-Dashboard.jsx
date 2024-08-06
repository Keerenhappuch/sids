import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />
            <div className="py-12"></div>
            <section id="assignments-section" class="admin-section"/>
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
            <section id="results-section" class="admin-section"/>
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
            <section id="announcements-section" class="admin-section">
                <h2>Post Announcements</h2>
                <form>
                    <label for="announcement-title">Title</label>
                    <input type="text" id="announcement-title" name="announcement-title" required/>
                    
                    <label for="announcement-description">Description</label>
                    <textarea id="announcement-description" name="announcement-description" rows="4" required></textarea>
                    
                    <button type="submit">Post Announcement</button>
                </form>
            </section>
            <section id="materials-section" class="admin-section"/>
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

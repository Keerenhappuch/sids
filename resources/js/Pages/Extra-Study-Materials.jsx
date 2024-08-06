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
            <section class="study-materials-section">
                <h2>Extra Study Materials</h2>
                <div class="study-materials">
                    <div class="material">
                        <h3>Math Tutorial</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/kfF40MiXhBU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="material">
                        <h3>Physics Textbook</h3>
                        <img src="https://via.placeholder.com/150" alt="Physics Textbook"/>
                        <p><a href="#">Download Physics Textbook</a></p>
                    </div>
                    <div class="material">
                        <h3>Chemistry Lab Experiments</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZIwzRkjn86w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="material">
                        <h3>English Literature Book</h3>
                        <img src="https://via.placeholder.com/150" alt="English Literature Book"/>
                        <p><a href="#">Download English Literature Book</a></p>
                    </div>
                    <div class="material">
                        <h3>Biology Study Guide</h3>
                        <img src="https://via.placeholder.com/150" alt="Biology Study Guide"/>
                        <p><a href="#">Download Biology Study Guide</a></p>
                    </div>
                    <div class="material">
                        <h3>History Documentary</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
            </div>
        </AuthenticatedLayout>
    );
}

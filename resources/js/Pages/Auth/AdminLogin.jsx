import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
            <div class="login-container"/>
              <div class="login-box">
                <div class="login-header">
                <img src="https://i.ibb.co/YfdNcmJ/fu.png" alt="Logo" class="logo"/>
                <h2>Admin Login</h2>
            </div>
            <form>
                <label for="admin-username">Username</label>
                <input type="text" id="admin-username" name="admin-username" required>
                
                <label for="admin-password">Password</label>
                <input type="password" id="admin-password" name="admin-password" required>
                
                <button type="submit">Login</button>
            </form>
        </div>
    </div>

    );
}

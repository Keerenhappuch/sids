<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Student Information Dissemination System') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <!-- Scripts -->

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
        <script>
        // JavaScript to handle tab switching

        window.onload = function() {
            const tabLinks =  document.querySelectorAll('.tab-link');
            const tabContents = document.querySelectorAll('.tab-content');


            document.querySelectorAll('.tab-link').forEach(button => {
                button.addEventListener('click', () => {
                    document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                    document.getElementById(`${button.dataset.tab}-section`).classList.add('active');
                });
            });
        }

        function logout() {
            alert('You have logged out.');
            window.location.href = 'login.html'; // Redirect to login page or any other page
        }
    </script>
    </body>
</html>

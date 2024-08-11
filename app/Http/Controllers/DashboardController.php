<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function dashboard(): Response {
        return Inertia::render('Dashboard');
    }

    public function createAnnouncement(Request $request) {
        $announcement = Announcement::create(
            [
                'title' => $request->title,
                'description' => $request->description,
                'user_id' => auth()->id(),
            ]
        );

        // TODO: Send announcement to all parents
        return "Announcement created";
    }

    public function successPage() {
        echo "Success on creation";

    }
}

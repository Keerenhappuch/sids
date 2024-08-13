<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Assignment;
use App\Models\ExtraStudyMaterial;
use App\Models\Result;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{

    public function generateRandomPassword($length = 12)
    {
        // Define the pool of characters to use for generating the password
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=';

        // Generate a random password using Laravel's Str helper
        $password = Str::random($length);

        // Shuffle the characters to ensure the randomness
        $shuffledPassword = str_shuffle($password);

        // Return the generated password with the requested length
        return substr($shuffledPassword, 0, $length);
    }
    public function dashboard(): Response {
        
        return Inertia::render('Dashboard');
    }


    public function getAnnouncements() {
        $announcements = Announcement::orderBy('created_at', 'desc')->get();
        return Inertia::render('Announcement', ['announcements' => $announcements]);
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

    public function registerStudent(Request $request) {
        $generated_password = $this->generateRandomPassword();
        $user = User::create(
            [
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($generated_password),
            ]
        );

        // create an associated student record
        $student = Student::create(
            [
                'user_id' => $user->id,
                'parent_name' => $request->parent_name,
                'class' => $request->class,
                'phone_number' => $request->phone_number,
                'address' => $request->address,
                'registration_number' => '' // TODO: Generate registration number
            ]
        );

        return "Student onboarded successfully.";
    }

    public function createAssignment(Request $request) {
        // handle the file
        if($request->file('file')) {
            $fileName = $request->file->getclientOriginalName();
            $filePath = $request->file('file')->storeAs('uploads', $fileName, 'public');

            $assignment = Assignment::create(
                [
                    'title' => $request->title,
                    'description' => $request->description,
                    'file_path' => $filePath,
                    'user_id' => auth()->id(),
                    'subject_id' => 1,
                ]
            );

            return "Assignment created successfully";
        }

        return "Error: No file was uploaded";
    }

    public function successPage() {
        echo "Success on creation";
    }

    public function createMaterial(Request $request) {
    // handle the file
    if($request->file('file')) {
        $fileName = $request->file('file')->getClientOriginalName();
        $filePath = $request->file('file')->storeAs('uploads', $fileName, 'public');

        $material = ExtraStudyMaterial::create([
            'title' => $request->title,
            'description' => $request->description,
            'file_path' => $filePath,
            'user_id' => auth()->id(),
            'subject_id' => 1,
        ]);

        return "Material Uploaded successfully";
    } else {
        return "Error: No file was uploaded";
    }
}

public function materialsuccessPage() {
    echo "Success on creation";
}


public function createResult(Request $request) {
    $result = Result::create(
        [
            'name' => $request->name,
            'subject' => $request->subject,
            'test_score' => $request->test_score,
            'exam_score' => $request->exam_score,
            'remark' => $request->remark,
            'user_id' => auth()->id(),
        ]
    );

    return "Result created successfully";
}

public function resultsuccessPage() {
    echo "Success on creation";
}
}
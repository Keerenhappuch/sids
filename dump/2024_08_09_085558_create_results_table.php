<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('results', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign key referencing users table for student
            $table->foreignId('subject_id')->constrained('subjects')->onDelete('cascade'); // Foreign key referencing subjects table
            $table->integer('test_score'); // Score from test
            $table->integer('exam_score'); // Score from exam
            $table->integer('total_score'); // Total score (test_score + exam_score)
            $table->string('grade'); // Grade (e.g., A, B, C, etc.)
            $table->string('remarks')->nullable(); // Remarks, optional
            $table->timestamps(); // Timestamps for created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('results');
    }
};

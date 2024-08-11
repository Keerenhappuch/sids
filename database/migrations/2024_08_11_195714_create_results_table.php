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
            $table->id();
            $table->foreignId('user_id');// Foreign key referencing users table for student
            $table->foreignId('subject_id'); // Foreign key referencing subjects table
            $table->integer('test_score'); // Score from test
            $table->integer('exam_score'); // Score from exam
            $table->text('remarks')->nullable(); // Remarks, optional
            $table->timestamps();
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

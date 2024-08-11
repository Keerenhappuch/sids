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
        Schema::create('extra_study_materials', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // Title of the study material
            $table->text('description'); // Description of the study material
            $table->string('file_path'); // Path to the uploaded file
            $table->foreignId('subject_id'); // Foreign key referencing subjects table
            $table->foreignId('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('extra_study_materials');
    }
};

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
        Schema::create('annnouncement', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->string('title'); // Title of the announcement
            $table->text('description'); // Description of the announcement
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign key referencing users table for admin
            $table->timestamps(); // Timestamps for created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('annnouncement');
    }
};

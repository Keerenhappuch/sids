<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    // TODO: Add dynamic values for total_score and grade


    protected $fillable = [
      'name',
      'subject',
      'test_score',
      'exam_score',
      'remark',
      'user_id',
];
}

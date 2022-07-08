<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $with = ['user', 'units'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function units()
    {
        return $this->belongsToMany(Unit::class)->withPivot('quantity')->withTimestamps();
    }
}

<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Landmark;
use App\Models\Wish;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

use function Laravel\Prompts\error;

class LandmarkController extends Controller
{
    public function show($name) {
        Log::info($name);
        if ($name == null) {
            return;
        }

        $landmark = Landmark::where('name',$name)->first();

        $feature = [
            'location' => $landmark->location,
            'properties' => [
                'landmark_id' => $landmark->id,
                'name' => $landmark->name,
                'thainame' => $landmark->thai_name,
                'detail' => $landmark->detail,
                'description' => $landmark->description,
            ],
            'result' => [
                'imageUrl' => $landmark->image_url,
                'panoramaUrl' => $landmark->panorama_url,
            ]
        ];

        $landmark = [
            'feature' => $feature
        ];
        
        return Inertia::render('Landmark', [
            'landmark' => $landmark
        ]);
    }
}

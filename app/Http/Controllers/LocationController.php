<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LocationController extends Controller
{
    public function index(Request $request) {
        $location = $request->location != null ? $request->location : 'Bangkhen';
        $landmarks = Location::where('name',$location)->first()->landmarks;

        $features = [];
        foreach ($landmarks as $landmark) {
            $feature = [
                'location' => $location,
                'properties' => [
                    'name' => $landmark->name,
                    'imageurl' => $landmark->image_url,
                ],
                'geometry' => [
                    'type' => 'Landmark',
                    'coordinates' => [$landmark->longtitude, $landmark->latitude],
                    'url' => $landmark->location
                ]
            ];
            $features[] = $feature;
        }

        $geojson = [
            'location' => $location,
            'features' => $features
        ];
        return Inertia::render('Location', [
            'geojson' => $geojson
        ]);
    }
}

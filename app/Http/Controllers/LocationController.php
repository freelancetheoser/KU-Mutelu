<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LocationController extends Controller
{
    public function index(Request $request) {
        $location = $request->location != null
                    ? Location::where('name',$request->location)->first()
                    : Location::where('name','Bangkhen')->first();
        $landmarks = $location->landmarks;
        $features = [];
        foreach ($landmarks as $landmark) {
            $feature = [
                'location' => [
                    'name' => $location,
                    'coordinates' => [$location->latitude,$location->longtitude],
                    'latitude' => $location->latitude,
                    'longtitude' => $location->longtitude,
                ],
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

<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Location;
use App\Models\Landmark;
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

    public function store(Request $request){
        $request->validate([
            'name' => 'required|string',
            'thai_name' => 'required|string',
        ]);
        
        $location = new Location();
        $location->name = $request->name;
        $location->thai_name = $request->thai_name;
        $location->latitude = $request->latitude;
        $location->longtitude = $request->longtitude;
        $location->save();
    }

    public function search(Request $request){
        $validated = $request->validate([
            'keyword'=>['required', 'min:1']
        ]);

        $keyword = $request->keyword;

        $landmarks = Landmark::where('name', 'like', '%'.$keyword.'%')
                        ->orWhere('thai_name', 'like', '%'.$keyword.'%')
                        ->get();

        $features = [];
        foreach ($landmarks as $landmark) {
            $feature = [
                'location' => [
                    'name' => $landmark->location->name,
                ],
                'properties' => [
                    'name' => $landmark->name,
                    'thai_name' => $landmark->thai_name,
                    'imageurl' => $landmark->image_url,
                ],
                'geometry' => [
                    'type' => 'Landmark',
                    'url' => $landmark->location
                ]
            ];
            $features[] = $feature;
        }

        $searchjson = [
            'features' => $features
        ];

        return Inertia::render('Location', [
            'searchjson' => $searchjson
        ]);
    }
}

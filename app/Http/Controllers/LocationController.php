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

    public function search(Request $request){
        $validated = $request->validate([
            'locationName'=>['required', 'min:1']
        ]);

        $locationName = $request->locationName;

        $location = Landmark::where('name', 'like', '%'.$locationName.'%')
                        ->orWhere('thai_name', 'like', '%'.$locationName.'%')
                        ->get();

    
        return response()->json($location);
    }
}

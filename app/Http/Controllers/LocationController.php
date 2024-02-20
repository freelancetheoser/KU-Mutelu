<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LocationController extends Controller
{
    public function index(Request $request) {
        // เรียกข้อมูลจากฐานข้อมูล
        $locate = $request->locate != null ? $request->locate : 'Bangkhen';
        $locations = Location::where('locate',$locate)->get();
        
        // สร้าง geojson จากข้อมูลที่ดึงมา
        $features = [];
        foreach ($locations as $location) {
            $feature = [
                'locate' => $locate,
                'properties' => [
                    'Name' => $location->name,
                    'imageurl' => $location->image_url,
                ],
                'geometry' => [
                    'type' => 'Location',
                    'coordinates' => [$location->longtitude, $location->latitude], // สลับลำดับเพื่อให้เป็น (long, lat)
                    'url' => $location->locate
                ]
            ];
            $features[] = $feature;
        }

        $geojson = [
            'locate' => $locate,
            'features' => $features
        ];

        return Inertia::render('Location', [
            'geojson' => $geojson
        ]);
    }
}

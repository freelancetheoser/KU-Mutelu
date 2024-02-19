<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function index() {
        // เรียกข้อมูลจากฐานข้อมูล
        $locations = Location::all();

        // สร้าง geojson จากข้อมูลที่ดึงมา
        $features = [];
        foreach ($locations as $location) {
            $feature = [
                'type' => 'Feature',
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
            'type' => 'LocationCollection',
            'features' => $features
        ];
        return Inertia::render('Location', [
            'geojson' => $geojson
        ]);
    }
}

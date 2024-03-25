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
    public function show($name)
    {
        Log::info($name);
        if ($name == null) {
            return;
        }

        $landmark = Landmark::where('name', $name)->first();

        $feature = [
            'location' => $landmark->location,
            'properties' => [
                'landmark_id' => $landmark->id,
                'name' => $landmark->name,
                'thainame' => $landmark->thai_name,
                'detail' => $landmark->detail,
                'description' => $landmark->description,
                'bamboos' => $landmark->bamboos,
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

    public function store(Request $request)
    {
        $request->validate([
            'location_id' => 'required|exists:locations,id',
            'name' => 'required|string',
            'thai_name' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'image' => 'required|image',
            'panorama' => 'required|image',
            'detail' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $landmark = new Landmark();
        $landmark->location_id = $request->location_id;
        $landmark->name = $request->name;
        $landmark->thai_name = $request->thai_name;
        $landmark->latitude = $request->latitude;
        $landmark->longtitude = $request->longtitude;
        if ($request->hasFile('image')) {
            $fileName = self::generateImageFileName($request->file('image'));
            $request->file('image')->move(storage_path('imagesLandmark'), $fileName);
            $landmark->image_url = storage_path('imagesLandmark') . '/' . $fileName;
        }
        if ($request->hasFile('panorama')) {
            $fileName = self::generatePanoramaFileName($request->file('panorama'));
            $request->file('panorama')->move(storage_path('imagesPanorama'), $fileName);
            $landmark->panorama_url = storage_path('imagesPanorama') . '/' . $fileName;
        }
        $landmark->detail = $request->detail;
        $landmark->description = $request->description;
        $landmark->save();
    }

    private static function generateImageFileName($image)
    {
        $imageFileNames = Landmark::get()->pluck('image_url');
        while (true) {
            $imageFileName = hash('md5', time()) . '.' . $image->getClientOriginalExtension();
            if (!$imageFileNames->has($imageFileName)) {
                break;
            }
        }
        return $imageFileName;
    }

    private static function generatePanoramaFileName($panorama)
    {
        $panoramaFileNames = Landmark::get()->pluck('panorama_url');
        while (true) {
            $panoramaFileName = hash('md5', time()) . '.' . $panorama->getClientOriginalExtension();
            if (!$panoramaFileNames->has($panoramaFileName)) {
                break;
            }
        }
        return $panoramaFileName;
    }
}

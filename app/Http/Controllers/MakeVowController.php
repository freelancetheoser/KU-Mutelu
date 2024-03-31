<?php

namespace App\Http\Controllers;

use App\Models\Landmark;
use App\Models\Offering;
use App\Models\Wish;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MakeVowController extends Controller {
    public function index(Request $request) {
        // request has wish_id
        // search landmark by wish_id
        $landmark = Landmark::whereHas('wishes', function ($query) use ($request) {
            $query->where('id', $request->wishId);
        })->first();

        $feature = [
            'location' => $landmark->location,
            'properties' => [
                'landmark_id' => $landmark->id,
                'name' => $landmark->name,
                'thainame' => $landmark->thai_name,
                'detail' => $landmark->detail,
                'description' => $landmark->description,
                'bamboos' => self::createBamboosData($landmark),
            ],
            'result' => [
                'imageUrl' => $landmark->image_url,
                'panoramaUrl' => $landmark->panorama_url,
            ]
        ];

        $landmark = [
            'feature' => $feature
        ];

        return Inertia::render('MakeVow', [
            'wishId' => $request->wishId,
            'landmark' => $landmark
        ]);
    }

    public function makeVow(Request $request): RedirectResponse {
        $offering = Offering::where('name', $request->offering)->first();
        $wish = Wish::find($request->wishId);
        $wish->offerings()->attach($offering->id);
        $wish->update(['status' => 'แก้บนแล้ว', 'offering_quantity' => $request->quantity]);

        return redirect()->route('landmark.show', ['name' => $wish->landmark->name]);
    }

    private static function createBamboosData($landmark) {
        if ($landmark) {
            $maxWishInBamboo = 10;
            $maxBamboo = 5;

            // Get the wishes and randomize the order
            $wishes = $landmark->wishes->shuffle();
            $wish_count = $wishes->count();
            $bamboo_count = ceil($wish_count / $maxWishInBamboo);
            $bamboos = $landmark->bamboos->take(min($bamboo_count, $maxBamboo))->shuffle();

            if ($wish_count > 0 && $bamboos->isNotEmpty()) {
                $wishesChunks = $wishes->chunk($maxWishInBamboo);

                // map wishesChunks to bamboos
                $bamboos->each(function ($bamboo, $index) use ($wishesChunks) {
                    $wishesCollection = collect();
                    $wishesChunks[$index]->each(function ($wish) use ($wishesCollection) {
                        $wishesCollection->push($wish);
                    });
                    $bamboo->wishes = $wishesCollection;
                });
            } else {
                $bamboos->each(function ($bamboo) {
                    $bamboo->wishes = collect();
                });
            }
        } else {
            $bamboos = collect();
        }

        return $bamboos;
    }


}

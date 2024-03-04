<?php

namespace App\Http\Controllers;

use App\Models\Landmark;
use App\Models\Location;
use App\Models\Wish;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;

class WishController extends Controller
{

    const WISH_NOT_FOUND = "Wish not found";
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $wish = Wish::all();
        return response()->json(['wishes' => $wish], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'content' => 'required|string',
            'image' => [
                'nullable',
                File::image()->max(1024 * 1024),
            ]
        ]);
    
        $wish = new Wish();
        $wish->user_id = Auth::user()->id;
        $wish->landmark_id = $request->landmark_id;
        $wish->content = $request->get('content');
        if($request->hasFile('image')){
            $fileName = self::generateFileName($request->file('image'));
            $request->file('image')->move(storage_path('imagesWish'),$fileName);
            $wish->image_wish = storage_path('imagesWish') . '/' . $fileName;
        }
       $wish->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $wish = Wish::find($id);
    
        if (!$wish) {
            return response()->json(['message' => self::WISH_NOT_FOUND], 404);
        }

        return response()->json(['wish' => $wish], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Wish $wish)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Wish $wish)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $wish = Wish::find($id);


        if (!$wish) {
            return response()->json(['message' => self::WISH_NOT_FOUND], 404);
        }

        unlink($wish->image);

        $wish->delete();


        return response()->json(['message' => 'Wish deleted successfully'], 200);
    }

    private static function generateFileName($image){
        $fileNames = Wish::get()->pluck('image_wish');
        while (true) {
            $fileName = hash('md5', time()) . '.' . $image->getClientOriginalExtension();
            if (!$fileNames->has($fileName)){
                break;
            }
        }
        return $fileName;
    }
}

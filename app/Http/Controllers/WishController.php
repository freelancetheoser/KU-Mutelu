<?php

namespace App\Http\Controllers;

use App\Models\Wish;
use Illuminate\Http\Request;

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
                File::image()->min(1024)->max(12 * 1024),
            ]
        ]);
    
        $wish = new Wish();
        $wish->user_id = Auth::user()->id;
        $wish->content = $request->get('content');
        if($request->hasFile('image')){
            $fileName = self::generateFileName($request->file('image'));
            $request->file('image')->move(storage_path('imagesWish'),$fileName);
            $wish->image_wish = storage_path('imagesWish') . '/' . $fileName;
        }

        if ($wish->save()) {
            return response()->json([
                'success' => true,
                'message' => 'wish created successfully',
            ], Response::HTTP_CREATED);
        }
        return response()->json([
            'success' => false,
            'message' => 'wish created failed'
        ], Response::HTTP_BAD_REQUEST);
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
        $fileNames = Wish::get()->pluck('image');
        while (true) {
            $fileName = hash('md5', time()) . '.' . $image->getClientOriginalExtension();
            if (!$fileNames->has($fileName)){
                break;
            }
        }
        return $fileName;
    }
}

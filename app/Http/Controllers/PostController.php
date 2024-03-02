<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\File;
use Intervention\Image\Facades\Image;

class PostController extends Controller
{

    const POST_NOT_FOUND = "Post not found";

    public function index()
    {
        $post = Post::all();
        return response()->json(['posts' => $post], 200);
    }

    public function show($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => self::POST_NOT_FOUND], 404);
        }

        return response()->json(['post' => $post], 200);
    }

    public function store(Request $request)
    {

        $request->validate([
            'content' => 'required|string',
            'image' => [
                File::image()->min(1024)->max(12 * 1024),
            ]
        ]);
    
        $post = new Post();
        $post->user_id = Auth::user()->id;
        $post->content = $request->get('content');
        if($request->hasFile('image')){
            $fileName = self::generateFileName($request->file('image'));
            $request->file('image')->move(storage_path('images'),$fileName);
            $post->image_path = storage_path('images') . '/' . $fileName;
        }

        if ($post->save()) {
            return response()->json([
                'success' => true,
                'message' => 'post created successfully',
            ], Response::HTTP_CREATED);
        }
        return response()->json([
            'success' => false,
            'message' => 'post created failed'
        ], Response::HTTP_BAD_REQUEST);
    }

    public function destroy($id)
    {
        $post = Post::find($id);


        if (!$post) {
            return response()->json(['message' => self::POST_NOT_FOUND], 404);
        }

        unlink($post->image_path);

        $post->delete();


        return response()->json(['message' => 'Post deleted successfully'], 200);
    }

    private static function generateFileName($image){
        $fileNames = Post::get()->pluck('image_path');
        while (true) {
            $fileName = hash('md5', time()) . '.' . $image->getClientOriginalExtension();
            if (!$fileNames->has($fileName)){
                break;
            }
        }
        return $fileName;
    }

    private static function resizeImage($image)
    {   
        // กำหนดขนาดที่ต้องการลดรูป
        $width = 300;
        $height = 200;
        
        // ใช้ Intervention Image ในการปรับขนาดรูป
        // $resizedImage = Image::make($image)->resize($width, $height)->encode('wepb');
        
        // return $resizedImage;
    }
}

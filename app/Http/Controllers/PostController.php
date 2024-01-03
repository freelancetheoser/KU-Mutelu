<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Http\Response;

class PostController extends Controller
{

    const POST_NOT_FOUND = "Post not found";

    public function index()
    {
        $posts = Post::all();
        return response()->json(['posts' => $posts], 200);
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
        $posts = new Post();

        $posts->content = $request->get('content');
        if($request->hasFile('image')){
            $fileName = self::generateFileName($request->image);
            $request->image->move(storage_path('images'),$fileName);
            $posts->image_path = storage_path('images') . '/' . $fileName;
        }

        if ($posts->save()) {
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
        $posts = Post::find($id);


        if (!$posts) {
            return response()->json(['message' => self::POST_NOT_FOUND], 404);
        }

        unlink($posts->image_path);

        $posts->delete();


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
}

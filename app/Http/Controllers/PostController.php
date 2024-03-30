<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\File;
use Intervention\Image\Facades\Image;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{

    const POST_NOT_FOUND = "Post not found";

    public function index()
    {
        $posts = Post::all();
        $features = [];
        foreach ($posts as $post) {
            $feature = [
                'user' => [
                    'user_id' => $post->user_id,
                    // 'imageProfile' => $post->user->image_profile,
                ],
                'properties' => [
                    'post_id'=> $post->id,
                    'content' => $post->content,
                    'imagePost' => asset($post->image_post),
                    'likes_count' => $post->likes_count,
                ],
            ];
            $features[] = $feature;
        }

        $feedjson = [
            'features' => $features
        ];
        Log::info($post);
        return Inertia::render('SocialFeed', [
            'feedjson' => $feedjson
        ]);
    }

    public function show($id)
    {
        $posts = Post::find($id);
        $features = [];
        foreach ($posts as $post) {
            $feature = [
                'user' => [
                    'user_id' => $post->user_id,
                    'imageProfile' => $post->user->image_profile,
                ],
                'properties' => [
                    'content' => $post->content,
                    'imagePost' => $post->image_post,
                ],
            ];
            $features[] = $feature;
        }

        $postjson = [
            'features' => $features
        ];
        return Inertia::render('SocialFeed', [
            'postjson' => $postjson
        ]);
    }

    public function store(Request $request)
    {
        
        $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'image' => [
                'nullable',
                File::image()->max(1024 * 1024),
            ]
        ]);
        
        $post = new Post();
        $post->user_id = Auth::user()->id;
        $post->title = $request->title;
        $post->content = $request->get('content');
        if($request->hasFile('image')){
            $fileName = self::generateFileName($request->file('image'));
            $request->file('image')->move(storage_path('/app/public/imagesPost'),$fileName);
            $post->image_post = 'storage/imagesPost' . '/' . $fileName;
        }
        if($post->save()){
            return redirect('/home');
        }
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
        $fileNames = Post::get()->pluck('image_post');
        while (true) {
            $fileName = hash('md5', time()) . '.' . $image->getClientOriginalExtension();
            if (!$fileNames->has($fileName)){
                break;
            }
        }
        return $fileName;
    }
}

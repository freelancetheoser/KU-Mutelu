<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Like;

class LikeController extends Controller
{
    public function likePost(Request $request)
    {
        $like = new Like();
        $like->user_id = Auth::user()->id;
        $like->post_id = $request->post_id;
        $like->save();

        return response()->json(['message' => 'Post liked successfully']);
    }

    public function unlikePost(Request $request)
    {
        $like = Like::where('user_id', Auth::user()->id)
                    ->where('post_id', $request->post_id)
                    ->first();

        if ($like) {
            $like->delete();
            return response()->json(['message' => 'Post unliked successfully']);
        }

        return response()->json(['message' => 'Post not liked']);
    }
}

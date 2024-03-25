<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Like;
use App\Models\Post;
use Illuminate\Support\Facades\Log;

class LikeController extends Controller
{
    public function likePost(Request $request)
    {
        $postId = $request->input('post_id');
        $post = Post::find($postId);
    
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }
    
        $user = Auth::user();
    
        if ($post->likes()->where('user_id', $user->id)->exists()) {
            // ถ้ามีการกดไลค์แล้ว ให้ยกเลิกไลค์
            if ($post->likes_count >= 0) { // เช็คว่า like_count มากกว่า 0 หรือไม่
                $post->likes()->where('user_id', $user->id)->delete();
                $post->decrement('likes_count'); // ลดค่า like_count ลง 1
            }
            // return response()->json(['message' => 'Unliked'], 200);
        } else {
            // ถ้ายังไม่ได้กดไลค์ ให้กดไลค์
            $post->likes()->create(['user_id' => $user->id]);
            $post->increment('likes_count');
            // return response()->json(['message' => 'Liked'], 200);
        }
    }
}

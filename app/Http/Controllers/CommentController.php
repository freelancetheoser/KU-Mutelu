<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CommentController extends Controller
{
    public function index($postId)
    {
        $comments = Comment::where('post_id', $postId)->get();
        return response()->json(['comments' => $comments], 200);
    }

    public function store(Request $request) {
        Log::info($request);
        $request->validate([
            'post_id' => 'required',
            'content' => 'required|string',
        ]);

        // Create a new comment instance
        $comment = new Comment();
        $comment->user_id = Auth::user()->id;
        $comment->post_id = $request->post_id;
        $comment->content = $request->content;
        $comment->save();
    }
}

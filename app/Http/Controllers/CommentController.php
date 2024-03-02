<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index($postId)
    {
        $comments = Comment::where('post_id', $postId)->get();
        return response()->json(['comments' => $comments], 200);
    }

    public function store() {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'post_id' => 'required|exists:posts,id',
            'content' => 'required|string',
        ]);

        // Create a new comment instance
        $comment = new Comment();
        $comment->user_id = $request->user_id;
        $comment->post_id = $request->post_id;
        $comment->content = $request->content;
        $comment->save();

        // Return a response
        return response()->json(['comment' => $comment], 201);
    }
}

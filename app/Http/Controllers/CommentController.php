<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CommentController extends Controller
{

    public function index($postId)
    {
        $comments = Comment::where('post_id', $postId)->get();
        $features = [];
        foreach ($comments as $comment) {
            $feature = [
                'user' => [
                    'user_id' => $comment->user_id,
                    'username' => $comment->username,
                    'imageProfile' => asset($comment->image_profile),
                ],
                'properties' => [
                    'comment_id'=> $comment->id,
                    'content' => $comment->content,
                ],
            ];
            $features[] = $feature;
        }

        $commentjson = [
            'features' => $features
        ];
        Log::info($comments);
        return Inertia::render('SocialFeed', [
            'commentjson' => $commentjson
        ]);
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

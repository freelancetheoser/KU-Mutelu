<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function checkUserLoginStatus()
    {
        $user = auth()->user();

        if ($user) {
            // ผู้ใช้เข้าสู่ระบบอยู่
            return response()->json([
                'logged_in' => true,
                'user' => $user
            ]);
        } else {
            // ไม่มีผู้ใช้เข้าสู่ระบบ
            return response()->json([
                'logged_in' => false,
                'message' => 'No user is logged in.'
            ]);
        }
    }
}

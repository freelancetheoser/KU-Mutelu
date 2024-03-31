<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use App\Models\Post;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function show($id)
    {
        $profile = Profile::where('user_id', $id)->firstOrFail();
        return response()->json($profile);
    }

    public function showprofile(Request $request): Response
    {
        // $user = User::where('username', $username)->firstOrFail();

        // // จัดเตรียมข้อมูล profile ที่จะส่งไปยัง view
        // $profileDetail = [
        //     'properties' => [
        //         'username' => $user->username,
        //         'zodiac' => $user->zodiac,
        //     ],
        //     'result' => [
        //         'imageProfile' => $user->image_profile,
        //     ]
        // ];

        $user = $request->user();
        $wishes = $user->wishes()->with('landmark')->get()->toArray();
        // ส่งข้อมูลไปยัง view ผ่าน Inertia
        return Inertia::render('Profile/MuProfile', [
            // 'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            // 'status' => session('status'),
            'user' => $user,
            'wishes' => $wishes,
        ]);
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/home');
    }
}

<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LandmarkController;
use App\Http\Controllers\LocationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/register', function() {
    return Inertia::render('Register');
});

// Link Navbar
Route::get('/home', function() {
    return Inertia::render('Home');
});

Route::get('/post', function() {
    return Inertia::render('Post');
});

Route::get('/posttest', function() {
    return Inertia::render('Posttest');
})->middleware(['auth', 'verified'])->name('posttest');

// Location and Landmark
Route::match(['get', 'post'],'/location', [LocationController::class, 'index'])->name('location.index');
Route::post('/location/search', [LocationController::class, 'search'])->name('location.search');
Route::get('/landmark/{name}', [LandmarkController::class, 'show'])->name('landmark.show');

Route::get('/viewer', function() {
    return Inertia::render('Viewer');
});

Route::get('/sambhuraphajan', function() {
    return Inertia::render('Landmark');
});




Route::get('/prayer', function() {
    return Inertia::render('Prayer');
})->name('prayer');

Route::get('/prepost', function() {
    return Inertia::render('Prepost');
})->name('Prepost');

Route::get('/postcomplete', function() {
    return Inertia::render('Postcomplete');
})->name('Postcomplete');

Route::get('/socialfeed', function() {
    return Inertia::render('SocialFeed');
})->name('socialfeed');

Route::get('/muprofile', function() {
    return Inertia::render('MuProfile');
})->name('MuProfile');

Route::get('/donate', function() {
    return Inertia::render('Donate');
});

// Link Menubar
Route::get('/world', function() {
    return Inertia::render('About');
});

Route::get('/mail', function() {
    return Inertia::render('About');
});

Route::get('/facebook', function() {
    return Inertia::render('About');
});

Route::get('/github', function() {
    return Inertia::render('About');
});

Route::get('/shopkmu', function() {
    return Inertia::render('Shop');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{id}', [PostController::class, 'show']);
Route::post('/posts/create', [PostController::class, 'store'])
->name("post.store");
Route::put('/posts/update/{id}', [PostController::class, 'update']);
Route::delete('/posts/delete/{id}', [PostController::class, 'destroy']);

Route::get('/temp', function() {
    return view("test");
});

Route::middleware('auth:user')->group(function () {
    Route::get('/profiles/{id}', [ProfileController::class, 'show']);
});

require __DIR__.'/auth.php';

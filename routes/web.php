<?php

use App\Http\Controllers\ProfileController;
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
});


Route::get('/location', function() {
    return Inertia::render('Location');
})->name('location');

Route::get('/prayer', function() {
    return Inertia::render('Prayer');
})->name('prayer');

Route::get('/event', function() {
    return Inertia::render('Event');
});

Route::get('/about', function() {
    return Inertia::render('About');
});

Route::get('/viewer', function() {
    return Inertia::render('Viewer');
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

require __DIR__.'/auth.php';

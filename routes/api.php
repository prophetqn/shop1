<?php

use App\Http\Controllers\CollectionController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\AuthenticateController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SizeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('homepage',  [CollectionController::class, 'showHomepage']);

Route::get('collections/{category:slug?}', [CollectionController::class, 'show'])->where(['category' => '^(?!all).*$']);

Route::get('collections/all',  [CollectionController::class, 'showAll']);

Route::get('products/{product:slug?}', [ProductController::class, 'show']);

Route::resource('size', SizeController::class);

Route::resource('color', ColorController::class);

Route::post('login', [AuthenticateController::class, 'authenticate']);

Route::post('logout', [AuthenticateController::class, 'logout']);

Route::post('register', [AuthenticateController::class, 'store']);

Route::get('get-remembered-user', [AuthenticateController::class, 'getRememberedUser']);

Route::post('forgot-password', [AuthenticateController::class, 'sendResetLink']);

Route::post('reset-password', [AuthenticateController::class, 'resetPassword']);

Route::resource('cart', CartController::class);

Route::resource('order', OrderController::class);

Route::get('order-province', [OrderController::class, 'getProvinceData']);

Route::get('order-district', [OrderController::class, 'getDistrictData']);

Route::get('order-ward', [OrderController::class, 'getWardData']);





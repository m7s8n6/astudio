<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TimesheetController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::middleware('auth:api')->group(function () {
    // Routes for User model
    Route::get('/user', [UserController::class, 'index']);
    Route::post('/user', [UserController::class, 'store']);
    Route::get('/user/{id}', [UserController::class, 'show']);
    Route::post('/user/update', [UserController::class, 'update']);
    Route::post('/user/delete', [UserController::class, 'destroy']);

    // Routes for Project model
    Route::post('/project', [ProjectController::class, 'store']);
    Route::get('/project/{id}', [ProjectController::class, 'show']);
    Route::get('/project', [ProjectController::class, 'index']);
    Route::post('/project/update', [ProjectController::class, 'update']);
    Route::post('/project/delete', [ProjectController::class, 'destroy']);

    // Routes for Timesheet model
    Route::post('/timesheet', [TimesheetController::class, 'store']);
    Route::get('/timesheet/{id}', [TimesheetController::class, 'show']);
    Route::get('/timesheet', [TimesheetController::class, 'index']);
    Route::post('/timesheet/update', [TimesheetController::class, 'update']);
    Route::post('/timesheet/delete', [TimesheetController::class, 'destroy']);
});

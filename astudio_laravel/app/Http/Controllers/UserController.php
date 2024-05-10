<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Start with a base query
        $query = User::query();

        // Apply filters if provided
        if ($request->filled('first_name')) {
            $query->where('first_name', $request->input('first_name'));
        }
        if ($request->filled('last_name')) {
            $query->where('last_name', $request->input('last_name'));
        }
        if ($request->filled('date_of_birth')) {
            $query->where('date_of_birth', $request->input('date_of_birth'));
        }
        if ($request->filled('gender')) {
            $query->where('gender', $request->input('gender'));
        }
        $users = $query->get();

        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        return User::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        return User::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $user = User::findOrFail($id);
        $user->update($request->all());
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $user = User::findOrFail($id);
        $user->delete();
        return 204;
    }
}

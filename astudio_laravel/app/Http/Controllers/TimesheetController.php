<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Timesheet;

class TimesheetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Start with a base query
        $query = Timesheet::query();

        // Apply filters if provided
        if ($request->filled('task_name')) {
            $query->where('task_name', $request->input('task_name'));
        }
        if ($request->filled('date')) {
            $query->whereDate('date', $request->input('date'));
        }
        if ($request->filled('hours')) {
            $query->where('hours', $request->input('hours'));
        }
        $timesheets = $query->get();

        return response()->json($timesheets);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        return Timesheet::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        return Timesheet::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $timesheet = Timesheet::findOrFail($id);
        $timesheet->update($request->all());
        return $timesheet;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $timesheet = Timesheet::findOrFail($id);
        $timesheet->delete();
        return 204;
    }
}

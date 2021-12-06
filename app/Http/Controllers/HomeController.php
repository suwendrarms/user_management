<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\DbManagementController;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->DealarManagement = new DbManagementController;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return view('home');
        $dealars = $this->DealarManagement->getdealars();
        //dd($dealars);
        return view('pages.dealars.dealars',compact('dealars'));
    }
}

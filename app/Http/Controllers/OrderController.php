<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getProvinceData()
    {
        $response = Http::withHeaders([
            'token' => env('GHN_API_TOKEN', false)
        ])->get('https://online-gateway.ghn.vn/shiip/public-api/master-data/province');
        
        if ($response->successful()) {
            return response($response->object()->data, $response->object()->code);
        } else {
            return response($response->object()->message, $response->object()->code);
        }
    }

    public function getDistrictData()
    {
        $response = Http::withHeaders([
            'token' => env('GHN_API_TOKEN', false)
        ])->get('https://online-gateway.ghn.vn/shiip/public-api/master-data/district', [
            'province_id' => request('province-id')
        ]);
        
        if ($response->successful()) {
            return response($response->object()->data, $response->object()->code);
        } else {
            return response($response->object()->message, $response->object()->code);
        }
    }

    public function getWardData()
    {
        $response = Http::withHeaders([
            'token' => env('GHN_API_TOKEN', false)
        ])->get('https://online-gateway.ghn.vn/shiip/public-api/master-data/ward', [
            'district_id' => request('district-id')
        ]);
        
        if ($response->successful()) {
            return response($response->object()->data, $response->object()->code);
        } else {
            return response($response->object()->message, $response->object()->code);
        }
    }
}

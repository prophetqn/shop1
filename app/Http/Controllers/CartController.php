<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CartController extends Controller
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
    public function store($userId)
    {
        return Cart::create([
            'user_id' => $userId
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($userId)
    {
        $cart = User::find($userId)->cart()->with(['units.product' => function ($product) {
                $product->withOut('units', 'category')->select('id', 'name', 'slug', 'exact_price', 'origin_price');
        }])->first();

        return response($cart, Response::HTTP_OK);
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
    public function update(Request $request, $userId)
    {
        $cart = Cart::where('user_id', $userId)->first();

        if (is_null($cart)) {
            $cart = $this->store($userId);
        }

        $syncArr = [];

        foreach ($request->all() as $item) {
            $syncArr[$item['unit_id']] = array('quantity_select' => $item['quantity_select']);
            //Laravel automatically convert array of objects to arrays of associated array???
        }

        $cart->units()->sync($syncArr);

        // Unit::find($item['unitId'])->update([
        //     'quantity_stock' => $item['stock']
        // ]);

        return response('Cart updated successfully.', Response::HTTP_OK);
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
}

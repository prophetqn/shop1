<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CollectionController extends Controller
{
    public function show(Category $category)
    {
        $products = $category->products();
        $this->addFilterQueries($products);
        $this->addOrderQueries($products);
        return response($products->paginate(8), 200);
    }

    public function showAll()
    {
        $products = Product::query();
        $this->addFilterQueries($products);
        $this->addOrderQueries($products);
        return response($products->paginate(8), 200);
    }

    public function showHomepage()
    {
        return response([
            'newArrival' => Product::orderByDesc('created_at')->take(12)->get(),
            'bestSeller' => Product::withSum('units', 'quantity_sold')->orderByDesc('units_sum_quantity_sold')->take(8)->get()
        ], 200);
    }

    protected function addFilterQueries($query)
    {
        //price
        if (request()->input('price')) {
            $query->where(function ($q) {
                $priceArr = array_chunk(array_map(fn($c) => intval($c), explode(',', request()->input('price'))), 2);
                // $q->whereBetween('exact_price', $priceArr[0]);
                foreach($priceArr as $i => $price) {
                    $i === 0 ? $q->whereBetween('exact_price', $price) : $q->orWhereBetween('exact_price', $price);
                }
                return $q;
            });
        };

        //color
        if (request()->input('color')) {
            $query->whereHas('units', function ($q1) {
                return $q1->whereHas('color', function ($q2) {
                    return $q2->whereIn('id', array_map(fn($c) => intval($c), explode(',', request()->input('color'))));
                });
            });
        };

        //size
        if (request()->input('size')) {
            $query->whereHas('units', function ($q1) {
                return $q1->whereHas('size', function ($q2) {
                    return $q2->whereIn('id', array_map(fn($c) => intval($c), explode(',', request()->input('size'))));
                });
            });
        };

        return $query;
    }

    protected function addOrderQueries($query)
    {
        if (request()->input('order')) {
            $orderQueries = explode('-', request()->input('order'));
            return Schema::hasColumn('products', $orderQueries[0]) 
                    ? $query->orderBy(...$orderQueries)
                    : $query->withSum('units', $orderQueries[0])->orderBy('units_sum_'.$orderQueries[0], $orderQueries[1]);
        } else {
            return $query->orderByDesc('created_at');
        }
    }
}

<?php

namespace App\Traits;


trait  ApiResponser
{

    public function success($data = null, $msg = null, $code = 200)
    {
        return response()->json([
            'success' => true,
            'msg' => $msg,
            'data' => $data
        ], $code);
    }


    public function error($msg = null, $code = 500, $data = null)
    {
        return response()->json([
            'success' => false,
            'msg' => $msg,
            'data' => $data
        ], $code);
    }
}

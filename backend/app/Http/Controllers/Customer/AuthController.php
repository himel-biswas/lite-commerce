<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\User;
use App\Traits\ApiResponser;

class AuthController extends Controller
{
    use ApiResponser;

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:5',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->error('Validation error', 401, $validator->errors());
        }

        $user = User::create([
            'name' => $request->name,
            'is_admin' => false,
            'password' => bcrypt($request->password),
            'email' => $request->email
        ]);

        return $this->success(
            [
                'token' => $user->createToken('api-token')->plainTextToken,
            ],
            'Successfully registered'
        );
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:5',
        ]);

        if ($validator->fails()) {
            return $this->error('Validation error', 401, $validator->errors());
        }

        if (!auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
            return $this->error('Credentials not match', 401);
        }

        return $this->success(
            [
                'token' => auth()->user()->createToken('API Token')->plainTextToken,
            ],
            'Successfully logged in'
        );
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return $this->success(null, 'Successfully logged out');
    }

    public function me()
    {
        $data = auth()->user();

        return $this->success($data, 'Successfully retreived my info');
    }
}

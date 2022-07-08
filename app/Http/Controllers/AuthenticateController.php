<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthenticateController extends Controller
{
    public function authenticate(Request $request)
    {
        $attributes = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (!auth()->attempt($attributes, $request->isRemembered)) {
            throw ValidationException::withMessages([
                'email' => 'Sai thông tin đăng nhập.'
            ]);
        };

        $request->session()->regenerate();

        return;
    }

    public function getRememberedUser() {
        if (auth()->check()) {
            return response(auth()->user(), Response::HTTP_OK);
        } else {
            return response(false, 206);
        }
    }

    public function logout(Request $request) {
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return;
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'password' => 'required|confirmed|min:6|max:255',
        ]);

        $user = User::create([
            'name' => request('name'),
            'phone' => request('phone'),
            'email' => request('email'),
            'password' => Hash::make(request('password')),
            'is_admin' => request('is_admin')
        ]);

        event(new Registered($user));

        Auth::login($user);

        return;
    }

    public function sendResetLink(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status == Password::RESET_LINK_SENT
                    ? response()->json(['status' => __($status)], Response::HTTP_OK)
                    : response()->json(['errors' => __($status)], Response::HTTP_BAD_REQUEST);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6|max:255',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );
        
        return $status == Password::PASSWORD_RESET
                    ? response()->json(['status' => __($status)], Response::HTTP_OK)
                    : response()->json(['errors' => __($status)], Response::HTTP_BAD_REQUEST);
    }
}

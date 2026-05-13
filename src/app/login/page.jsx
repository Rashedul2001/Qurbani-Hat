'use client';
//TODO: later implement React Hook Form

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Spinner } from '@/components/ui/spinner';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleEmailLogin = async (e) => {
        e.preventDefault();
        const { data, error } = await authClient.signIn.email({
            email: formData.email,
            password: formData.password,
            callbackURL: "/",
            rememberMe: false
        }, {
            onRequest: (ctx) => {
                setIsLoading(true);
            },
            onSuccess: (ctx) => {
                toast.success('You Have Logged in successfully');
                setIsLoading(false);
                router.push('/');
            },
            onError: (ctx) => {
                // TODO: make the error look better
                toast.error(ctx.error.message);
                setIsLoading(false);
            },
        })
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleGoogleLogin = async () => {
        setIsLoading(true);
    };


    return (
        <main className="flex justify-center items-center bg-linear-to-br from-green-50 to-background px-4 py-12 min-h-screen">
            <div className="w-full max-w-md animate__animated animate__backInDown">
                <Card className="space-y-6 p-8">
                    <div className="text-center">
                        <div className="flex justify-center items-center bg-linear-to-br from-green-600 to-green-700 mx-auto mb-4 rounded-lg w-12 h-12">
                            <Image src="/logo.png" width={40} height={40} alt="Qurbani Hat Logo" className="w-auto h-6 sm:h-9" />
                        </div>
                        <h1 className="font-bold text-2xl">Welcome Back</h1>
                        <p className="mt-2 text-muted-foreground text-sm">
                            Sign in to your QurbaniHat account
                        </p>
                    </div>

                    <form onSubmit={handleEmailLogin} className="space-y-4">
                        <div>
                            <label className="block mb-2 font-semibold text-sm">Email Address</label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-sm">Password</label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 w-full h-11"
                            disabled={isLoading}
                        >
                            {isLoading ? (<span className='flex items-center gap-2'> Signing in <Spinner data-icon="inline-start" /></span>) : 'Sign In'}
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="border-t w-full" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>

                    <Button
                        onClick={handleGoogleLogin}
                        variant="outline"
                        className="w-full h-11"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        <span className="ml-2">Google</span>
                    </Button>

                    <div className="text-sm text-center">
                        <span className="text-muted-foreground">Don&apos;t have an account? </span>
                        <Link href="/register" className="font-semibold text-green-600 hover:underline">
                            Sign up
                        </Link>
                    </div>
                </Card>
            </div>
        </main>
    );
}
export default LoginPage;
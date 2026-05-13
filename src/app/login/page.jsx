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
import { GrGoogle } from 'react-icons/gr';
import { socialSignIn } from '@/lib/services/SocialSignIn';

const LoginPage = () => {
    const router = useRouter();

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
            // callbackURL: "/", // this was not allowing to show the toast message on successful login
            rememberMe: false
        }, {
            onRequest: (ctx) => {
                setIsLoading(true);
            },
            onSuccess: (ctx) => {
                toast.success('You Have Logged in successfully');
                setIsLoading(false);
                router.push('/');
                router.refresh();
            },
            onError: (ctx) => {
                // TODO: make the error look better
                toast.error(error);
                setIsLoading(false);
            },
        })
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
                        onClick={() => socialSignIn('google')}
                        variant="outline"
                        className="w-full h-11"
                    >
                        <GrGoogle />
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
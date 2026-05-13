'use client'

// later implement React Hook Form
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { Spinner } from '@/components/ui/spinner';
import { useRouter } from 'next/navigation';
import { BsGoogle } from 'react-icons/bs';
import { socialSignIn } from '@/lib/services/SocialSignIn';



const RegisterPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        image: '',
        password: '',
        confirmPassword: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleEmailRegister = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (formData.password.length < 8) {
            toast.error('Password must be at least 8 characters');
            return;
        }

        await authClient.signUp.email({
            email: formData.email,
            password: formData.password,
            name: formData.name,
            image: formData.image,
        }, {
            onRequest: (ctx) => {
                setIsLoading(true);
            },
            onSuccess: (ctx) => {
                toast.success(<div><p>Account created successfully</p><p>Please login to continue</p></div>);
                setIsLoading(false);
                router.push('/login');
            },
            onError: (ctx) => {
                // TODO: make the error look better
                toast.error(ctx.error.message);
                setIsLoading(false);
            },
        });
    };



    return (
        <main className="flex justify-center items-center bg-linear-to-br from-green-50 to-background px-4 py-12 min-h-screen">
            <div className="w-full max-w-md animate__animated animate__backInDown">
                <Card className="space-y-6 p-8">

                    <div className="text-center">
                        <div className="flex justify-center items-center bg-linear-to-br from-green-600 to-green-700 mx-auto mb-4 rounded-lg w-12 h-12">
                            <Image src="/logo.png" width={40} height={40} alt="Qurbani Hat Logo" className="w-auto h-6 sm:h-9" />
                        </div>
                        <h1 className="font-bold text-2xl">Create Account</h1>
                        <p className="mt-2 text-muted-foreground text-sm">
                            Join QurbaniHat to buy and sell quality livestock
                        </p>
                    </div>

                    <form onSubmit={handleEmailRegister} className="space-y-4">
                        <div>
                            <label className="block mb-2 font-semibold text-sm">Full Name</label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                            />
                        </div>

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
                            <label className="block mb-2 font-semibold text-sm">Image Link</label>
                            <Input
                                type="text"
                                name="image"
                                placeholder="https://example.com/image.jpg"
                                value={formData.image}
                                onChange={handleInputChange}
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
                            <p className="mt-1 text-muted-foreground text-xs">
                                At least 8 characters
                            </p>
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-sm">Confirm Password</label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
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
                            {isLoading ? (<span className='flex items-center gap-2'> Creating account <Spinner data-icon="inline-start" /></span>) : 'Create Account'}
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
                        <BsGoogle />
                        <span className="ml-2">Google</span>
                    </Button>

                    <div className="text-sm text-center">
                        <span className="text-muted-foreground">Already have an account? </span>
                        <Link href="/login" className="font-semibold text-green-600 hover:underline">
                            Sign in
                        </Link>
                    </div>
                </Card>
            </div>
        </main>
    );
};

export default RegisterPage;
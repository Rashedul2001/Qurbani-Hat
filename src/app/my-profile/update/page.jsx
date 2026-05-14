'use client'
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { authClient } from '@/lib/auth-client';
import { error } from 'better-auth/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { toast } from 'react-toastify';

const UpdateProfilePage = () => {
    const router = useRouter();

    const [formData, setFormData] = React.useState({
        name: '',
        image: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { data, error } = await authClient.updateUser({
            image: formData.image,
            name: formData.name,
        });
        console.log(data + "data")
        console.log(error + "error")

        setIsSubmitting(false);
        if (data) {
            toast.success('Profile updated successfully!');
            router.push('/my-profile');
        }
        if (error) {
            toast.error('Failed to update profile. Please try again.');

        }
    };




    return (
        <main className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            <div className="mx-auto max-w-2xl">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 mb-8 text-green-600 hover:underline animate__animated animate__fadeInLeft"
                >
                    <BsArrowLeft className="w-4 h-4" />
                    Back to Profile
                </button>

                <div className="mb-8 animate__animated animate__fadeInDown">
                    <h1 className="mb-2 font-bold text-4xl">Update Profile</h1>
                    <p className="text-muted-foreground">Edit your personal information</p>
                </div>

                <Card className="space-y-6 p-8 animate__animated animate__fadeInDown">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-2 font-semibold text-sm">Full Name *</label>
                            <Input
                                name="name"
                                type={"text"}
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={(e) => handleInputChange(e)}
                                required
                                disabled={isSubmitting}
                            />
                            <p className="mt-1 text-muted-foreground text-xs">
                                This is your public name on QurbaniHat
                            </p>
                        </div>


                        <div>
                            <label className="block mb-2 font-semibold text-sm">Image URL</label>
                            <Input
                                name="image"
                                type={"text"}
                                placeholder="Image URL"
                                value={formData.image}
                                onChange={(e) => handleInputChange(e)}
                                disabled={isSubmitting}
                            />
                            <p className="mt-1 text-muted-foreground text-xs">
                                This will be displayed on your profile page and shown to Sellers.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-4 border border-blue-200 rounded-lg">
                            <p className="text-muted-foreground text-sm">
                                <strong>Note:</strong> Your email address cannot be changed. If you need to change it, please contact support.
                            </p>
                        </div>

                        <div className="flex gap-3 pt-6 border-t">
                            <Button
                                type="submit"
                                className="flex-1 bg-green-600 hover:bg-green-700"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (<span className='flex items-center gap-2'> Updating Information <Spinner data-icon="inline-start" /></span>) : 'Update Information'}
                            </Button>
                            <Link href="/my-profile" className="flex-1">
                                <Button variant="outline" className="w-full" disabled={isSubmitting}>
                                    Cancel
                                </Button>
                            </Link>
                        </div>
                    </form>
                </Card>

                <Card className="bg-green-50 mt-6 p-6 border-green-200 animate__animated animate__fadeInDown" style={{ animationDelay: '0.1s' }}>
                    <h3 className="mb-2 font-semibold text-green-900">Complete Your Profile</h3>
                    <p className="mb-3 text-green-700 text-sm">
                        A complete profile helps sellers trust you and increases your chances of booking confirmation.
                    </p>
                </Card>
            </div>
        </main>
    );
};

export default UpdateProfilePage;
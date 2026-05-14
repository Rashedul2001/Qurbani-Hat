'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
// Todo: how can I get the session in server component ??

import { Card } from '@/components/ui/card';
import { authClient } from '@/lib/auth-client';
import { Edit, LogOut, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';



const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();

    if (!session) return null; //TODO: set this to do something later
    if (isPending) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <div className="mx-auto border-green-600 border-b-2 rounded-full w-12 h-12 animate-spin"></div>
                    <p className="mt-4 text-muted-foreground">Loading...</p>
                </div>
            </div>
        );
    }
    const handleLogout = () => {
        authClient.signOut();
    }



    return (
        <main className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            <div className="mx-auto max-w-2xl">
                <div className="mb-8 animate__animated animate__fadeInDown">
                    <h1 className="mb-2 font-bold text-4xl">My Profile</h1>
                    <p className="text-muted-foreground">Manage your account settings and personal information</p>
                </div>
            </div>
            <Card className="space-y-8 p-8 animate__animated animate__fadeInUp">
                <div className="flex justify-between items-start">
                    <Avatar className={'w-20 h-20'}>
                        <AvatarImage src={session.user.image} alt={session.user.name} />
                        <AvatarFallback className={'bg-green-300 text-green-800 text-3xl'}>{session.user.email.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <Link href="/my-profile/update">
                        <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                            <Edit className="w-4 h-4" />
                            Edit Profile
                        </Button>
                    </Link>
                </div>

                <div>
                    <h3 className="mb-4 font-semibold text-lg">Contact Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-muted p-4 rounded-lg">
                            <FaRegUser className="w-5 h-5 text-green-600" />
                            <div>
                                <p className="text-muted-foreground text-sm">Name</p>
                                <p className="font-semibold">{session.user.name}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-muted p-4 rounded-lg">
                            <Mail className="w-5 h-5 text-green-600" />
                            <div>
                                <p className="text-muted-foreground text-sm">Email</p>
                                <p className="font-semibold">{session.user.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-muted p-4 rounded-lg">
                            <Phone className="w-5 h-5 text-green-600" />
                            <div>
                                <p className="text-muted-foreground text-sm">Phone</p>
                                <p className="font-semibold text-muted-foreground">
                                    {session.user.phone || 'Not set'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-muted p-4 rounded-lg">
                            <MapPin className="w-5 h-5 text-green-600" />
                            <div>
                                <p className="text-muted-foreground text-sm">Address</p>
                                <p className="font-semibold text-muted-foreground">
                                    {session.user.address || 'Not set'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 font-semibold text-lg">Account Status</h3>
                    <div className="bg-green-50 p-4 border border-green-200 rounded-lg">
                        <p className="mb-2 text-muted-foreground text-sm">Verification Status</p>
                        {session.user.emailVerified ? (
                            <p className="font-semibold text-green-700">✓ Email Verified</p>
                        ) : (
                            <p className="font-semibold text-red-700">✗ Email Not Verified</p>
                        )}
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 font-semibold text-lg">Recent Activity</h3>
                    <div className="space-y-3">
                        <div className="bg-blue-50 p-4 border border-blue-200 rounded-lg">
                            <p className="text-muted-foreground text-sm">Last booking:</p>
                            <p className="font-semibold">No bookings yet</p>
                            <Link href="/animals">
                                <Button variant="outline" size="sm" className="mt-2">
                                    Browse Animals
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t">
                    <Button
                        onClick={handleLogout}
                        variant="destructive"
                        className="flex items-center gap-2"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </Button>
                </div>
            </Card>

            <Card className="bg-blue-50 mt-6 p-6 border-blue-200 animate__animated animate__fadeInUp" style={{ animationDelay: '0.1s' }}>
                <h3 className="mb-2 font-semibold">Need Help?</h3>
                <p className="mb-4 text-muted-foreground text-sm">
                    Have questions about your account or bookings? Contact our support team.
                </p>
                <Button variant="outline">Contact Support</Button>
            </Card>
        </main >
    );
};

export default ProfilePage;
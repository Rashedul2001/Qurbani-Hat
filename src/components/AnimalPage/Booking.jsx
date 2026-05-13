'use client'
import React, { useState } from 'react';
import { Card } from '../ui/card';
import { toast } from 'react-toastify';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { authClient } from '@/lib/auth-client';

const Booking = () => {
    const { data: session } = authClient.useSession();
    const [formData, setFormData] = useState({
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        phone: "",
        address: "",

    });
    const handleInputChange = (e) => {
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: session?.user?.name || "",
            email: session?.user?.email || "",
            phone: "",
            address: ""
        });
        toast.success("Booking submitted successfully!");

    }

    return (
        <Card className="space-y-6 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2 font-semibold text-sm">Full Name *</label>
                    <Input
                        name="name"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold text-sm">Email *</label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold text-sm">Phone Number *</label>
                    <Input
                        name="phone"
                        placeholder="+880 1XXXXXXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold text-sm">Delivery Location *</label>
                    <Input
                        name="address"
                        placeholder="City, Area, Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 w-full h-11"
                >
                    Confirm Booking
                </Button>
            </form>

            <p className="text-muted-foreground text-xs text-center">
                By confirming, you agree to our terms and conditions. A seller will contact you within 24 hours.
            </p>
        </Card>
    );
};

export default Booking;
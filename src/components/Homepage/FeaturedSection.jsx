import React from 'react';
import { BiShield } from 'react-icons/bi';
import { FiShoppingCart, FiTrendingUp } from 'react-icons/fi';
import { Card } from '@/components/ui/card';

const FeaturedSection = () => {
    return (
        <section className="bg-muted/30 px-4 sm:px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 font-bold text-3xl text-center">Why Choose QurbaniHat?</h2>
                <div className="gap-8 grid md:grid-cols-3">
                    <Card className="hover:shadow-lg p-6 text-center transition animate__animated animate__fadeInUp">
                        <BiShield className="mx-auto mb-4 w-12 h-12 text-green-600" />
                        <h3 className="mb-2 font-semibold text-xl">Verified Animals</h3>
                        <p className="text-muted-foreground">
                            All animals are health-checked and certified. Transparent details about breed, weight, and age.
                        </p>
                    </Card>

                    <Card className="hover:shadow-lg p-6 text-center transition animate__animated animate__fadeInUp" style={{ animationDelay: '0.1s' }}>
                        <FiTrendingUp className="mx-auto mb-4 w-12 h-12 text-green-600" />
                        <h3 className="mb-2 font-semibold text-xl">Best Prices</h3>
                        <p className="text-muted-foreground">
                            Competitive pricing directly from sellers. No middlemen, better value for your budget.
                        </p>
                    </Card>

                    <Card className="hover:shadow-lg p-6 text-center transition animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
                        <FiShoppingCart className="mx-auto mb-4 w-12 h-12 text-green-600" />
                        <h3 className="mb-2 font-semibold text-xl">Easy Booking</h3>
                        <p className="text-muted-foreground">
                            Simple booking process with secure payment. Home delivery available in most areas.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
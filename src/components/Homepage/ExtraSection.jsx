import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const ExtraSection = () => {
    return (
        <section className="bg-green-600 px-4 sm:px-6 lg:px-8 py-16 text-white">
            <div className="mx-auto max-w-7xl text-center">
                <h2 className="mb-6 font-bold text-3xl">Ready to Start Your Qurbani Journey?</h2>
                <p className="mb-8 text-green-100 text-lg">
                    Join thousands of satisfied customers who have found quality livestock on QurbaniHat
                </p>
                <Link href="/animals">
                    <Button size="lg" className="bg-white hover:bg-green-50 text-green-700">
                        Explore Our Collection
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default ExtraSection;
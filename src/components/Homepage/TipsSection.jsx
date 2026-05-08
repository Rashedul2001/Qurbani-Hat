import { Card } from 'flowbite-react';
import React from 'react';

const TipsSection = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 font-bold text-3xl text-center">Qurbani Tips & Guide</h2>
                <div className="gap-8 grid md:grid-cols-2">
                    <Card className="bg-blue-50 p-8 border-blue-200">
                        <h3 className="flex items-center gap-2 mb-4 font-semibold text-xl">
                            <span className="text-2xl">✓</span> Selecting an Animal
                        </h3>
                        <ul className="space-y-3 text-muted-foreground text-sm">
                            <li>• Check age and weight according to Islamic guidelines</li>
                            <li>• Ensure animal is free from diseases or defects</li>
                            <li>• Verify health certificates</li>
                            <li>• Consider your budget and needs</li>
                        </ul>
                    </Card>

                    <Card className="bg-green-50 p-8 border-green-200">
                        <h3 className="flex items-center gap-2 mb-4 font-semibold text-xl">
                            <span className="text-2xl">📋</span> Booking Process
                        </h3>
                        <ul className="space-y-3 text-muted-foreground text-sm">
                            <li>• Create account and browse animals</li>
                            <li>• View detailed animal information</li>
                            <li>• Place booking with delivery address</li>
                            <li>• Receive confirmation and delivery details</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default TipsSection;
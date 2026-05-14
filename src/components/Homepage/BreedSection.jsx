import React from 'react';
import { Card } from '../ui/card';

const BreedSection = () => {
    return (
        <section className="bg-muted/30 px-4 sm:px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 font-bold text-3xl text-center">Top Breeds</h2>
                <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
                    {[
                        { name: 'Pabna Deshi Bull', description: 'Best for breeding & meat', icon: '🐂' },
                        { name: 'Black Bengal Goat', description: 'Premium meat quality', icon: '🐐' },
                        { name: 'Garole White Sheep', description: 'Excellent wool & meat', icon: '🐑' },
                        { name: 'Nili-Ravi Buffalo', description: 'High milk production', icon: '🐃' },
                    ].map((breed) => (
                        <Card key={breed.name} className="hover:shadow-lg p-6 text-center transition">
                            <div className="mb-4 text-4xl">{breed.icon}</div>
                            <h3 className="mb-2 font-semibold text-lg">{breed.name}</h3>
                            <p className="text-muted-foreground text-sm">{breed.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BreedSection;
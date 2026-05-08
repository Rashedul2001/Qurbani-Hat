import { getFeaturedAnimal } from '@/lib/api/Animal';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import AnimalCard from '../AnimalCard';

const FeaturedAnimalSection = async () => {
    const featuredAnimals = await getFeaturedAnimal();
    
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="font-bold text-3xl">Featured Animals</h2>
                    <Link href="/animals">
                        <Button outline className="flex items-center gap-2">
                            View All <BsArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {featuredAnimals.map((animal) => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedAnimalSection;
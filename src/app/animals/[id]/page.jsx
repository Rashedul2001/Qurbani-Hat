import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getAllAnimal, getAnimalById } from '@/lib/services/JsonAPI';
import { Calendar, MapPin, Scale, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";

const AnimalDetailPage = async ({ params }) => {
    const { id } = await params;
    const animal = await getAnimalById(id);

    if (!animal) {
        return (
            <div className="flex justify-center items-center px-4 min-h-screen">
                <Card className="p-8 w-full max-w-md text-center">
                    <h1 className="mb-4 font-bold text-2xl">Animal Not Found</h1>
                    <p className="mb-6 text-muted-foreground">
                        The animal you&apos;re looking for doesn&apos;t exist or has been removed.
                    </p>
                    <Link href="/animals">
                        <Button className="bg-green-600 hover:bg-green-700">
                            Browse Animals
                        </Button>
                    </Link>
                </Card>
            </div>
        )
    }
    const allAnimal = await getAllAnimal();
    const relatedAnimals = allAnimal.filter(a => a.type === animal.type && a.id !== animal.id).slice(0, 3);



    const categoryColor = {
        'Large Animal': 'bg-green-100 text-green-800',
        'Small Animal': 'bg-blue-100 text-blue-800',
    };

    const typeEmoji = {
        'Cow': '🐂',
        'Goat': '🐐',
        'Sheep': '🐑',
        'Buffalo': '🐃',
        'Dumba': '🐏',
        'Bull': '🐂'
    };

    return (
        <main className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
            <div className="mx-auto max-w-7xl">
                <BackButton />
                <div className="gap-8 grid lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        <Card className="overflow-hidden animate__animated animate__fadeInUp">
                            <div className="relative bg-muted h-96">
                                <Image
                                    src={animal.image}
                                    alt={animal.name}
                                    className="mx-auto rounded-xl w-3/4 h-full object-cover hover:scale-110 transition"
                                    width={400}
                                    height={400}
                                />

                            </div>
                        </Card>
                        <Card className="space-y-6 p-6">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h1 className="font-bold text-3xl">{animal.name}</h1>
                                            <span className="text-4xl">{typeEmoji[animal.type]}</span>
                                        </div>
                                        <p className="text-muted-foreground text-lg">
                                            {animal.type} • {animal.breed}
                                        </p>
                                    </div>
                                    <LuBadgeCheck className={categoryColor[animal.category]} />
                                </div>

                                <div className="font-bold text-green-600 text-4xl">
                                    ৳{animal.price.toLocaleString()}
                                </div>
                            </div>
                            <div className="gap-6 grid md:grid-cols-2 py-6 border-y">
                                <div className="flex items-center gap-4">
                                    <Scale className="w-5 h-5 text-green-600" />
                                    <div>
                                        <p className="text-muted-foreground text-sm">Weight</p>
                                        <p className="font-semibold text-lg">{animal.weight} kg</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Calendar className="w-5 h-5 text-green-600" />
                                    <div>
                                        <p className="text-muted-foreground text-sm">Age</p>
                                        <p className="font-semibold text-lg">{animal.age} years</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <MapPin className="w-5 h-5 text-green-600" />
                                    <div>
                                        <p className="text-muted-foreground text-sm">Location</p>
                                        <p className="font-semibold text-lg">{animal.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Tag className="w-5 h-5 text-green-600" />
                                    <div>
                                        <p className="text-muted-foreground text-sm">Category</p>
                                        <p className="font-semibold text-lg">{animal.category}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="mb-4 font-semibold text-xl">About This Animal</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {animal.description}
                                </p>
                            </div>
                            <div>
                                <h2 className="mb-4 font-semibold text-xl">Specifications</h2>
                                <div className="gap-4 grid md:grid-cols-2">
                                    <div className="bg-muted p-4 rounded-lg">
                                        <p className="text-muted-foreground text-sm">Breed</p>
                                        <p className="font-semibold">{animal.breed}</p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <p className="text-muted-foreground text-sm">Type</p>
                                        <p className="font-semibold">{animal.type}</p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <p className="text-muted-foreground text-sm">Weight</p>
                                        <p className="font-semibold">{animal.weight} kg</p>
                                    </div>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <p className="text-muted-foreground text-sm">Age</p>
                                        <p className="font-semibold">{animal.age} years old</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-green-50 p-6 border border-green-200 rounded-lg">
                                <h3 className="flex items-center gap-2 mb-3 font-semibold">
                                    <span className="text-xl">✓</span> Quality Assurance
                                </h3>
                                <ul className="space-y-2 text-muted-foreground text-sm">
                                    <li>• Health checked and certified</li>
                                    <li>• Disease-free with medical clearance</li>
                                    <li>• Well-fed and properly maintained</li>
                                    <li>• Ready for immediate delivery</li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                    {relatedAnimals.length > 0 && (
                        <Card className="p-4">
                            <h3 className="mb-4 font-semibold">Similar Animals</h3>
                            <div className="space-y-3">
                                {relatedAnimals.map((related) => (
                                    <Link
                                        key={related.id}
                                        href={`/animals/${related.id}`}
                                        className="flex gap-3 hover:bg-muted p-2 rounded transition"
                                    >
                                        <Image
                                            src={related.image}
                                            alt={related.name}
                                            width={100}
                                            height={100}
                                            className="rounded w-16 h-16 object-cover"
                                        />
                                        <div className="flex-1 text-sm">
                                            <p className="font-semibold">{related.name}</p>
                                            <p className="text-muted-foreground">৳{related.price.toLocaleString()}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Card>
                    )}
                </div>

            </div>

        </main >

    );
};

export default AnimalDetailPage;
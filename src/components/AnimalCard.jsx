import { Badge, Button, Card } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';

const categoryColor = {
    'Large Animal': 'bg-green-100 text-green-800',
    'Small Animal': 'bg-blue-100 text-blue-800',
};

const typeEmoji = {
    'Cow': '🐂',
    'Goat': '🐐',
    'Sheep': '🐑',
    'Buffalo': '🐃',
};

const AnimalCard = ({ animal }) => {
    return (
        <Card className="hover:shadow-lg overflow-hidden transition animate__animated animate__fadeInUp">
            <div className="relative bg-muted h-48 overflow-hidden">
                <Image
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                    width={200}
                    height={100}
                />
                <Badge className={`absolute top-3 right-3 ${categoryColor[animal.category]}`}>
                    {animal.category}
                </Badge>
                {/* <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="top-3 left-3 absolute bg-white/90 hover:bg-white p-2 rounded-full transition"
                >
                    <BiHeart
                        className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                    />
                </button> */}
            </div>

            <div className="space-y-4 p-4">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg">{animal.name}</h3>
                        <span className="text-2xl">{typeEmoji[animal.type]}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                        {animal.type} • {animal.breed}
                    </p>
                </div>

                <div className="gap-2 grid grid-cols-2 py-3 border-y text-sm">
                    <div>
                        <p className="text-muted-foreground">Weight</p>
                        <p className="font-semibold">{animal.weight} kg</p>
                    </div>
                    <div>
                        <p className="text-muted-foreground">Age</p>
                        <p className="font-semibold">{animal.age} years</p>
                    </div>
                </div>

                <div>
                    <p className="mb-2 text-muted-foreground text-xs">{animal.location}</p>
                    <p className="text-muted-foreground text-sm line-clamp-2">{animal.description}</p>
                </div>

                <div className="flex justify-between items-center pt-2">
                    <div>
                        <p className="text-muted-foreground text-xs">Price</p>
                        <p className="font-bold text-green-600 text-2xl">
                            ৳{animal.price.toLocaleString()}
                        </p>
                    </div>
                    <Link href={`/animals/${animal.id}`}>
                        <Button size="sm" className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                            <FiShoppingCart className="w-4 h-4" />
                            <span className="hidden sm:inline">View</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default AnimalCard;
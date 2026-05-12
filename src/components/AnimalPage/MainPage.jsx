// TODO: Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received

'use client'
import React, { useEffect, useState } from 'react';
import { Card } from '../ui/card';
import { BsSliders } from 'react-icons/bs';
import { Button } from '../ui/button';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import AnimalCard from '../AnimalCard';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

const MainPage = ({ filteredAnimals, Params }) => {
    const router = useRouter();
    const pathName = usePathname();
    const { animalType, priceRange, searchTerm, sortBy } = Params;


    const [currentAnimalType, setCurrentAnimalType] = useState(animalType ?? "All");
    const [currentPriceRange, setCurrentPriceRange] = useState((priceRange && priceRange.split('-').map(Number)) || [0, 600000]);
    const [currentSearchTerm, setCurrentSearchTerm] = useState((searchTerm ?? ""));
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(currentSearchTerm);
    const [debouncedPriceRange, setDebouncedPriceRange] = useState(currentPriceRange);
    const [currentSortBy, setCurrentSortBy] = useState(sortBy ?? "");
    const [showFilters, setShowFilters] = useState(false);



    const allAnimalType = ["All", "Cow", "Goat", "Sheep", "Dumba", "Bull"]


    useEffect(() => {
        const t = setTimeout(() => {
            setDebouncedSearchTerm(currentSearchTerm);
        }, 500);

        return () => clearTimeout(t);
    }, [currentSearchTerm]);


    useEffect(() => {
        const t = setTimeout(() => {
            setDebouncedPriceRange(currentPriceRange);
        }, 500);

        return () => clearTimeout(t);
    }, [currentPriceRange]);

    useEffect(() => {
        const params = new URLSearchParams(Params);
        if (currentAnimalType !== "All") {
            params.set("animalType", currentAnimalType);
        } else {
            params.delete("animalType");
        }

        if (!(debouncedPriceRange[0] === 0 && debouncedPriceRange[1] === 600000)) {
            params.set("priceRange", `${debouncedPriceRange[0]}-${debouncedPriceRange[1]}`);
        } else {
            params.delete("priceRange");
        }
        if (debouncedSearchTerm) {
            params.set("searchTerm", debouncedSearchTerm);
        } else {
            params.delete("searchTerm");
        }
        if (currentSortBy) {
            params.set("sortBy", currentSortBy);
        }
        else {
            params.delete("sortBy");
        }
        router.push(`${pathName}?${params.toString()}`, { scroll: false });



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentAnimalType, debouncedPriceRange, router, pathName, debouncedSearchTerm, currentSortBy]);

    const handleResetFilters = () => {
        setCurrentAnimalType("All")
        setCurrentPriceRange([0, 600000])
        setCurrentSearchTerm("")
        setCurrentSortBy("")
    }



    return (
        <>
            <div className="gap-6 grid lg:grid-cols-4">
                <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden'} lg:block`}>
                    <Card className="top-20 sticky space-y-6 p-6 h-fit">
                        <div>
                            <h3 className="flex items-center gap-2 mb-4 font-semibold">
                                <BsSliders className="w-4 h-4" />
                                Filters
                            </h3>
                            <Button
                                variant='outline'
                                onClick={() => setShowFilters(false)}
                                className="lg:hidden text-green-600 text-sm"
                            >
                                Hide Filters
                            </Button>
                        </div>
                        <div>
                            <label className="block mb-3 font-semibold text-sm">Animal Type</label>
                            <div className="space-y-2">
                                {
                                    allAnimalType.map((type) => (
                                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                                            <input type={"radio"}
                                                className='accent-green-800'
                                                name={type}
                                                value={type}
                                                checked={type.toLowerCase() === currentAnimalType.toLowerCase()}
                                                onChange={() => setCurrentAnimalType(type)} />
                                            <span className='text-sm'>{type}</span>
                                        </label>))
                                }
                            </div>

                        </div>

                        <div>
                            <label className="block mb-3 font-semibold text-sm">Price Range</label>
                            <div className="space-y-2">
                                <input
                                    type='range'
                                    min="0"
                                    max="600000"
                                    step={5000}
                                    value={currentPriceRange[0]}
                                    onChange={(e) => setCurrentPriceRange([parseInt(e.target.value), currentPriceRange[1]])}
                                    className='w-full accent-green-800'
                                />
                            </div>
                            <div className="space-y-2">
                                <input
                                    type='range'
                                    min="0"
                                    max="600000"
                                    step={5000}
                                    value={currentPriceRange[1]}
                                    onChange={(e) => setCurrentPriceRange([currentPriceRange[0], parseInt(e.target.value)])}
                                    className='w-full accent-green-800'
                                />
                            </div>
                            <div className="flex justify-between text-muted-foreground text-xs">
                                <span>৳{currentPriceRange[0].toLocaleString()}</span>
                                <span>৳{currentPriceRange[1].toLocaleString()}</span>
                            </div>
                        </div>
                        <Button
                            variant='outline'
                            className='w-full'
                            onClick={handleResetFilters}
                        >
                            Reset Filters
                        </Button>
                    </Card >

                </div>
                <div className="lg:col-span-3">

                    <div className="flex sm:flex-row flex-col gap-4 mb-6">
                        <div className="relative flex-1 animate__animated animate__fadeInUp">
                            <Search className="top-3 left-3 absolute w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search animals, breed, location..."
                                value={currentSearchTerm}
                                onChange={(e) => setCurrentSearchTerm(e.target.value)}
                                className="pl-10"
                            />

                        </div>
                        <Button variant='outline'
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden flex items-center gap-2 hover:bg-muted px-4 py-2 border rounded-lg"
                        >
                            <BsSliders className="w-4 h-4" />
                            Filters
                        </Button>

                        <Select
                            value={currentSortBy ?? ""}
                            onValueChange={(value) => setCurrentSortBy(value)}
                        >

                            <SelectTrigger className="w-full max-w-48">
                                <SelectValue placeholder="Select Sorting" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Sort By</SelectLabel>
                                    <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
                                    <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
                                    <SelectItem value="name-asc">Name: A to Z</SelectItem>
                                    <SelectItem value="name-desc">Name: Z to A</SelectItem>
                                    <SelectItem value="newest">Newest First</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {
                        filteredAnimals.length > 0 ? (
                            <div className="gap-6 grid md:grid-cols-2">
                                {filteredAnimals.map((animal) => (
                                    <AnimalCard key={animal.id} animal={animal} />))
                                }
                            </div>

                        ) :
                            (

                                <Card className="p-12 text-center">
                                    <p className="text-muted-foreground text-lg">
                                        No animals found matching your criteria.
                                    </p>
                                    <Button
                                        variant='outline'
                                        onClick={() => {
                                            handleResetFilters();
                                        }}
                                        className="mt-4 text-green-600 text-sm"
                                    >
                                        Clear filters
                                    </Button>
                                </Card>
                            )
                    }
                </div >
            </div>
        </>
    );

}

export default MainPage;
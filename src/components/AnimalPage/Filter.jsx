// TODO: make the filters reset while animal navigation is pressed 

'use client'
import React, { useEffect, useState } from 'react';
import { Card } from '../ui/card';
import { BsSliders } from 'react-icons/bs';
import { Button } from '../ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Filter = ({ animalType, priceRange }) => {
    const [currentAnimalType, setCurrentAnimalType] = useState(animalType || "All");
    const [currentPriceRange, setCurrentPriceRange] = useState((priceRange && priceRange.split('-').map(Number)) || [0, 600000]);

    const [showFilters, setShowFilters] = useState(false);
    const allAnimalType = ["All", "Cow", "Goat", "Sheep", "Dumba", "Bull"]

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (currentAnimalType !== "All") {
            params.set("animalType", currentAnimalType);
        } else {
            params.delete("animalType");
        }

        if (!(currentPriceRange[0] === 0 && currentPriceRange[1] === 600000)) {
            params.set("priceRange", `${currentPriceRange[0]}-${currentPriceRange[1]}`);
        } else {
            params.delete("priceRange");
        }
        router.push(`${pathName}?${params.toString()}`, { scroll: false });


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentAnimalType, currentPriceRange, router, pathName]);

    const handleResetFilters = () => {
        setCurrentAnimalType("All")
        setCurrentPriceRange([0, 600000])
    }



    return (
        <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <Card className="top-20 sticky space-y-6 p-6 h-fit">
                <div>
                    <h3 className="flex items-center gap-2 mb-4 font-semibold">
                        <BsSliders className="w-4 h-4" />
                        Filters
                    </h3>
                    <Button
                        // Todo: make the button look better
                        onClick={() => setShowFilters(false)}
                        className="lg:hidden text-blue-600 text-sm"
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

        </div >

    );
};

export default Filter;
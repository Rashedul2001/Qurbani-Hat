import MainPage from '@/components/AnimalPage/MainPage';
import { getAllAnimal } from '@/lib/services/JsonAPI';

export const metadata = {
    title: 'Browse Qurbani Animals | Best Prices',
    description: 'Find the best cows, goats, and sheep for Qurbani. Filter by breed, location, and price.',
};

const AllAnimalsPage = async ({ searchParams }) => {
    const allAnimals = await getAllAnimal();
    const params = await searchParams;
    const { animalType, searchTerm, priceRange, sortBy } = params;
    let filteredAnimals = allAnimals;

    if (animalType && animalType !== 'All') {
        filteredAnimals = filteredAnimals.filter(
            (animal) =>
                animal.type.toLowerCase() === animalType.toLowerCase());
    }
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredAnimals = filteredAnimals.filter(
            (animal) =>
                animal.name.toLowerCase().includes(term) ||
                animal.breed.toLowerCase().includes(term) ||
                animal.location.toLowerCase().includes(term)

        );
    }
    if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);

        filteredAnimals = filteredAnimals.filter(
            (animal) =>
                animal.price >= minPrice && animal.price <= maxPrice
        );
    }
    if (sortBy) {
        filteredAnimals.sort((a, b) => {
            switch (sortBy) {
                case 'price-low-to-high':
                    return a.price - b.price;
                case 'price-high-to-low':
                    return b.price - a.price;
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'newest':
                    return b.id - a.id;
                default:
                    return 0;
            }
        })
    }




    return (
        <main className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 animate__animated animate__fadeInDown">
                    <h1 className="mb-2 font-bold text-4xl">Browse Animals</h1>
                    <p className="text-muted-foreground">

                        Found {filteredAnimals.length} {filteredAnimals.length <= 1 ? 'Animal' : 'Animals'} {Object.keys(params).length > 0 && `out of ${allAnimals.length} Animals`}
                    </p>
                </div>

                <MainPage filteredAnimals={filteredAnimals} Params={params} />

            </div>

        </main >

    );
};

export default AllAnimalsPage;
export const getFeaturedAnimal = async () => {
    const response = await fetch(`${process.env.JSON_SERVER_URL}/animals?_page=1&_per_page=4`);
    const result = await response.json();
    return result.data;
}
export const getAllAnimal = async () => {
    const response = await fetch(`${process.env.JSON_SERVER_URL}/animals`);
    const result = await response.json();
    return result;
}
export const getAnimalById = async (id) => {
    const response = await fetch(`${process.env.JSON_SERVER_URL}/animals/${id}`);
    if (!response.ok)
        return null
    const result = await response.json();
    return result;
}
//not working properly
export const getRelatedAnimals = async (type, id) => {
    const response = await fetch(`${process.env.JSON_SERVER_URL}/animals?type=${type}&id_ne=${id}&_page=1&_per_page=3`);
    const result = await response.json();
    return result;
}




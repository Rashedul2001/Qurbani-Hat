export const getFeaturedAnimal = async () => {
    const response = await fetch(`${process.env.JSON_SERVER_URL}/animals?_page=1&_per_page=4`);
    const result = await response.json();
    return result.data;
}
export const getAllAnimal = async() =>{
    const response = await fetch(`${process.env.JSON_SERVER_URL}/animals`);
    const result = await response.json();
    return result;
}


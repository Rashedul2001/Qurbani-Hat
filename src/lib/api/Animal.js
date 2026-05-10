export const getFeaturedAnimal = async () => {
    const response = await fetch("https://qurbani-hat-json-server.onrender.com/animals?_page=1&_per_page=4");
    const result = await response.json();
    return result.data;
}

//Get all movies
export async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

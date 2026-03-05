async function fetachMovies() {
    const res = await fetch("http://localhost:3000")
    if (!res.ok) {
        throw new Error("Data faild loading");
    }
    return res.json()
}

export default fetachMovies
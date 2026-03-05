import { useState, useEffect } from "react";
import "./Movies.css"

export async function fetachMovies() {
    const res = await fetch("http://localhost:3000")
    if (!res.ok) {
        throw new Error("Data faild loading");
    }
    return res.json()
}

function CardsGrid() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetachMovies().then(data => {
            setData(data)
        }).catch(err => setData(err))
    }, [])
    return (
        <>
            <div className="main-grid">
                {data.map((mov) => {
                    return <div
                        key={mov.imdbID}
                        className="queb"
                    >
                        <div className="image">
                            <img src={mov.Images[0]} alt="none" />
                        </div>
                        <div className="allPara">
                        <div className="para year">
                            <p>Year</p>
                            <p>{mov.Year}</p>
                        </div>
                        <div className="para runtime">
                            <p>Runtime</p>
                            <p>{mov.Runtime}</p>
                        </div>
                        <div className="para gener">
                            <p>Genre</p>
                            <p>{mov.Genre}</p>
                        </div>
                        <div className="para langu">
                            <p>Language</p>
                            <p>{mov.Language}</p>
                        </div>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default CardsGrid
import "./NavBar.css"
import fetachMovies from "./Movies.jsx"

const data =await fetachMovies()

function inputCHecng(e) {
    return e.target.value
}


function NavBar() {
    return (
        <>
            <div className="main-navBar">
                <div className="navBar">
                    <h1 className="title">Movie Night</h1>
                    <p className="under-title">Search a movie and pick your seats</p>
                </div>
                <div className="search">
                    <input id="search-input" onChange={inputCHecng} className="search-input" type="text" placeholder="🔎Search movie by title.." />
                </div>
                <div className="seprated">
                    <p>Showing {data.length} results</p>
                </div>
            </div>
        </>
    )
}
export default NavBar
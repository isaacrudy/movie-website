import { useEffect, useState } from "react";
import HeroImage from "../components/HeroImage";
import {getRandomPopularMovie} from "../utils/api";

function PageAbout() {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        getRandomPopularMovie().then(setMovieData)
            .catch((error) => console.error('Failed to load the movie', error));
    }, []);

    return (
        <main>
            {movieData && <HeroImage movieData={movieData}/>}
            <p>ABOUT US: WE ARE SO COOL AND AWESOME</p>
        </main>
    );
}

export default PageAbout;
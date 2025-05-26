import HeroImage from "../components/HeroImage";

function PageAbout() {
    return (
        <main>
            <HeroImage movieData={popularMovies[0]}/>
            <p>ABOUT US: WE ARE SO COOL AND AWESOME</p>
        </main>
    );
}

export default PageAbout;
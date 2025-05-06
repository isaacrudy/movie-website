import MovieCard from "./MovieCard";

function MovieCards({ movieList, sectionClass }) {
  return (
    <section className={`movie-cards ${sectionClass}`}>
      {movieList.map((movieData) => {
        return <MovieCard key={movieData.id} movieData={movieData} />;
      })}
    </section>
  );
}

export default MovieCards;

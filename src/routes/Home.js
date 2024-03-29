import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Header from "../Header.js";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading-wrap">
          <div className="loading">Loading...</div>
        </div>
      ) : (
        <>
           <Header/>
          <section className="move-list">
          <div className="wrap">
              <div className="gap">
                <div className="container">
                  <h2 className="mainTitle">Movie List</h2>
                  <div className="line"></div>
                  <div className="movieList">
                    {movies.map((movie) => (
                      <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        year={movie.year}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          </>
      )}
    </>
  );
}
export default Home;
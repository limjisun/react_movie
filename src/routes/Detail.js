import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(title){
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json.data.movie);
        setLoading(false);
      };
      useEffect(() => {
        getMovie();
      }, []);
    
    return (
        <div>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <section id="section" style={{backgroundImage:`url(${movies.background_image})`, backgroundSize: 'cover',}}>
                <div class="wrap">
                    <div class="gap">
                        <div class="container">
                            <div class="content">
                                <div><img src={movies.medium_cover_image}/></div>
                                <div>
                                    <h2>{movies.title}</h2>
                                    <h3>{movies.year}</h3>
                                    <span>{movies.runtime} min | {movies.description_intro}</span>
                                    <h4>⭐ {movies.rating}</h4>
                                    <p></p>
                                    <iframe src={`https://www.youtube.com/embed/${movies.yt_trailer_code}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          )}
        </div>
      );
}


export default Detail;
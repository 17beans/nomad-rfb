import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const GetMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`))
            .json();
        setMovies(json.data.movies);
        setLoading(true);
    }

    useEffect(() => {
        GetMovies();
    }, [])
    useEffect(() => {
        if (movies === []) return
    }, [movies])

    return (
        <div className={styles.container}>
            {
                !loading ?
                    (
                        <h1 className={styles.loader}>Loading...</h1>
                    ) :
                    (
                        <div className={styles.movies}>
                            {
                                movies.map(movie =>
                                    <Movies
                                        key={movie.id}
                                        id={movie.id}
                                        url={movie.url}
                                        title={movie.title}
                                        summary={movie.summary}
                                        coverImg={movie.medium_cover_image}
                                        genres={movie.genres}
                                    />)
                            }
                        </div>
                    )
            }
        </div>
    );
}



export default Home;
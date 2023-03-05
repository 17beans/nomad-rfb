import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styles from "./Movies.module.css";
import { MarginV } from './Margin';



function Movies({ id, coverImg, url, title, summary, genres }) {
    return (
        <div className={styles.movies}>

            <img src={coverImg} className={styles.movies__img}></img>

            <div>

                <MarginV height={10} />

                <Link to={`/movie/${id}`}><h2 className={styles.movies__title}>
                    {title}
                </h2></Link>


                <p className={styles.movies__summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>

                <MarginV height={10} />

                <ul className={styles.movies__genres}>
                    {genres.map((genre =>
                        <li key={genre}>
                            {genre}
                        </li>))}
                </ul>
            </div>

        </div >

    )
}
Movies.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movies;
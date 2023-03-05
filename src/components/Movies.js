import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'



function Movies({ id, coverImg, url, title, summary, genres }) {
    return (
        <div>
            {!coverImg ? <h1>There is no cover image</h1> : <img src={coverImg}></img>}
            <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
            <p>{summary}</p>
            <ul>
                {genres.map((genre => <li key={genre}>{genre}</li>))}
            </ul>
        </div>

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
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';



function Movie({ bgImg, title, year, description_full, download_count, genres, yt_trailer_code, torrents }) {

    const options = {
        width: 640,
        height: 360,
        playerVars: {
            autoplay: 0
        },
    }

    return (
        <div>
            <h1>{title} ({year})</h1>
            <img src={bgImg} width='480' />
            <h2>Description</h2>
            <p>{description_full}</p>
            Download count: {download_count}
            {console.log(genres.length)}
            <h2>genre</h2>
            {genres.map((genre, key) => {
                return (
                    key === genres.length ? <div key={key}>{genre}, </div> : <div key={key}>{genre}</div>
                );
            })}
            <YouTube
                videoId={yt_trailer_code}
                opts={options}
            // onReady={}
            />
            <h2>torrents</h2>
            <ol>
                {torrents.map((torrent, key) => <li key={key}><a href={torrent.url}>{torrent.url}</a></li>)}
            </ol>

        </div>
    )
}
Movie.propTypes = {
    bgImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description_full: PropTypes.string.isRequired,
    download_count: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    yt_trailer_code: PropTypes.string.isRequired,
    torrents: PropTypes.arrayOf(PropTypes.object).isRequired,
}



export default Movie;
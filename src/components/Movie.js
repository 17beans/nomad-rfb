import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import styles from "./Movie.module.css";
import { MarginH, MarginV } from './Margin';



function Movie({ bgImg, title, year, description_full, download_count, genres, yt_trailer_code, torrents }) {

    const options = {
        // width: 640,
        // height: 360,
        width: '100%',
        playerVars: {
            autoplay: 0
        },
    }

    return (
        <div className={styles.movie}>

            <MarginV height={20} />

            <div className={styles.header2}>{title} ({year})</div>

            <MarginV height={40} />

            <div className={styles.movie__elements}>
                <div className={styles.movie__elementItem}>
                    <img src={bgImg} alt={title} />
                </div>
            </div>

            <div className={styles.movie__elements}>
                <div className={styles.movie__elementHeader}>
                    <div className={styles.header3}>Description</div>
                </div>
                <div className={styles.movie__elementItem}>
                    {description_full}
                </div>
            </div>


            <div className={styles.movie__elements}>
                <div className={styles.movie__elementHeader}>
                    <div className={styles.header3}>Download count</div>
                </div>
                <div className={styles.movie__elementItem}>
                    {download_count}
                </div>
            </div>

            <div className={styles.movie__elements}>
                <div className={styles.movie__elementHeader}>
                    <div className={styles.header3}>genre</div>
                </div>
                <div className={styles.movie__elementItem}>
                    {genres.map((genre, key) => {
                        return (
                            key === genres.length - 1 ?
                                <div key={key}>{`${genre}`} </div>
                                :
                                <div
                                    key={key}
                                    style={{
                                        display: 'flex'
                                    }}>

                                    {`${genre}, `}
                                    <MarginH width={10} />

                                </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.movie__elements}>
                <div className={styles.movie__elementHeader}>
                    <div className={styles.header3}>youtube trailer</div>
                </div>
                <div className={styles.movie__elementItem}>
                    <YouTube
                        videoId={yt_trailer_code}
                        opts={options}
                    // onReady={}
                    />
                </div>
            </div>

            <div className={styles.movie__elements}>
                <div className={styles.movie__elementHeader}>
                    <div className={styles.header3}>torrents</div>
                </div>
                <div className={styles.movie__elementItem}>
                    <ol className={styles.movie__genres}>
                        {torrents.map((torrent, key) => <li key={key}><a href={torrent.url}>{torrent.url}</a></li>)}
                    </ol>
                </div>
            </div>

        </div >
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
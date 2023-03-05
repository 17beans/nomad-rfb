import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import styles from './Detail.module.css'



function Detail() {
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState({});

    const { id } = useParams();

    const GetMovie = async () => {
        const json = (await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json())
            .data.movie;
        // console.log(json);
        setDetail(json);
        setLoading(true);
    }

    useEffect(() => {
        GetMovie();
    }, [])
    useEffect(() => {
        if (detail === undefined || detail === null || detail === {}) {
            console.log(`not loaded`);
            return;
        }
    }, [detail])



    return (
        <div className={styles.warpper} style={{background: detail.background_image_original}}>
            <div className={styles.container}>
                {
                    !loading ?
                        <h1 className={styles.loader}>Loading detail...</h1> :
                        <Movie
                            bgImg={detail.background_image_original}
                            title={detail.title}
                            year={detail.year}
                            description_full={detail.description_full}
                            download_count={detail.download_count}
                            genres={detail.genres}
                            yt_trailer_code={detail.yt_trailer_code}
                            torrents={detail.torrents}
                        />
                }
            </div>
        </div>
    )
}



export default Detail;
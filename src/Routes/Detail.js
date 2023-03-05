import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";



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
        // console.log(detail);
        // console.log(detail.length);
        // detail.map(item => console.log(`item: ${item}`))
    }, [detail])



    return (
        <div>
            {
                /**
                 * background_image_original
                 * description_full
                 * download_count
                 * genres (map)
                 * title
                 * torrents (map)
                 * year
                 * yt_trailer_code
                 */
            }
            {
                !loading ? 
                <h1>Loading detail...</h1> : 
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
    )
}



export default Detail;
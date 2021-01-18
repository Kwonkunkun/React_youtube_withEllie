import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const search = (query) => {
        youtube.search(query).then((videos) => setVideos(videos));
    };

    //didmount, update를 합쳐놓은 함수
    //function type에서는 이걸 써야한다.
    useEffect(() => {
        youtube.mostPopular().then((videos) => setVideos(videos));
    }, []);

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search} />
            <VideoList videos={videos} />
        </div>
    );
}

export default App;

import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
    const [videos, setVideos] = useState([]);

    //didmount, update를 합쳐놓은 함수
    //function type에서는 이걸 써야한다.
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=20&chart=mostPopular&regionCode=KR&key=AIzaSyCWHsYAjaXbgalCvWyg6UVlhS4RwwNY3sU",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log("error", error));
    }, []);

    return <VideoList videos={videos} />;
}

export default App;

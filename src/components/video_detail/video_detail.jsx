import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => (
    <section className={styles.detail}>
        <iframe
            className={styles.video}
            title="youtube video player"
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
        ></iframe>
        <h2>{video.snippet.title}</h2>
        <h2>{video.snippet.channelTitle}</h2>
        <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
);

export default VideoDetail;

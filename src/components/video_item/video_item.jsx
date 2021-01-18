import React from "react";
import styles from "./video_item.module.css";

//이렇게 쓰면 props안의 video를 받아올수 있다. 개꿀
const VideoItem = ({ video: { snippet } }) => (
    <li className={styles.container}>
        <div className={styles.video}>
            <img
                className={styles.thumbnail}
                src={snippet.thumbnails.medium.url}
                alt="video tag"
            />
            <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
        </div>
    </li>
);

export default VideoItem;

import {NextPage} from "next";
import {useEffect, useRef, useState} from "react";
import {dom} from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import styles from '../styles/WalshBand.module.scss';

interface Video {
    title: string;
    description?: string;
    formats: VideoFormat[];
}

interface VideoFormat {
    format: 'video/mp4'|'video/webm';
    url: string;
}

const WalshBand: NextPage = () => {
    const videos: Video[] = [
        {
            title: 'Chamber Ensemble, Oct. 6, 2022',
            description: 'Procession of the Nobles, Saxophone Ensemble',
            formats: [{
                url: 'https://mrhanlon.com/files/chamber-ensemble-2022-10-06.mp4',
                format: 'video/mp4',
            }],
        },
        {
            title: 'Walsh Symphonic Band Spring Concert 2022',
            formats: [{
                url: 'https://mrhanlon.com/files/walsh-symphonic-band-spring-2022.mp4',
                format: 'video/mp4',
            }],
        },
        {
            title: 'Walsh Symphonic Band Winter Concert 2021',
            formats: [{
                url: 'https://mrhanlon.com/files/walsh-winter-concert-2021.webm',
                format: 'video/webm',
            }, {
                url: 'https://mrhanlon.com/files/walsh-winter-concert-2021.mp4',
                format: 'video/mp4',
            }],
        },
    ];

    const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.load();
    }, [selectedVideo]);

    return (
        <div className={styles.container}>
            <Head>
                <title>$&gt; whois mrhanlon</title>
                <style>{dom.css()}</style>
            </Head>
            <main className={styles.main}>
                <h1>Walsh Band Videos</h1>
                <div className={styles.videos}>
                    <div className={styles.videoDisplay}>
                        <video ref={videoRef} controls>
                            {selectedVideo.formats.map(vf => <source key={vf.url} src={vf.url} type={vf.format} />)}
                        </video>
                        <h5>{selectedVideo.title}</h5>
                        {selectedVideo.description && <p>{selectedVideo.description}</p>}
                    </div>
                    <nav className={styles.navigation}>
                        <ul className={styles.navList}>
                            {videos.map(v => (
                                <li className={selectedVideo.title === v.title ? styles.navItemSelected : styles.navItem} key={v.title}>
                                    <a role={'button'} onClick={() => setSelectedVideo(v)}>{v.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </main>
        </div>
    );
};

export default WalshBand;
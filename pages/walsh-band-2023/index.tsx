'use client';

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styles from '../../src/styles/WalshBand.module.scss';

interface Video {
  title: string;
  description?: string;
  formats: VideoFormat[];
}

interface VideoFormat {
  format: 'video/mp4' | 'video/webm';
  url: string;
}

export default function Index() {
  const videos: Video[] = [
    {
      title: 'Extremis',
      description: 'by Randall Standridge',
      formats: [
        {
          url: 'https://mrhanlon.com/files/walsh-symphonic-band/spring-2023/walsh-symphonic-band-spring-2023-extremis.mp4',
          format: 'video/mp4'
        },
        {
          url: 'https://mrhanlon.com/files/walsh-symphonic-band/spring-2023/walsh-symphonic-band-spring-2023-extremis.webm',
          format: 'video/webm'
        }
      ]
    },
    {
      title: 'Call of the Wild',
      description: 'by Brian Balmages',
      formats: [
        {
          url: 'https://mrhanlon.com/files/walsh-symphonic-band/spring-2023/walsh-symphonic-band-spring-2023-call-of-the-wild.mp4',
          format: 'video/mp4'
        },
        {
          url: 'https://mrhanlon.com/files/walsh-symphonic-band/spring-2023/walsh-symphonic-band-spring-2023-call-of-the-wild.webm',
          format: 'video/webm'
        }
      ]
    },
    {
      title: 'The Incredibles',
      description: 'by Michael Giacchino, arr. Murtha',
      formats: [
        {
          url: 'https://mrhanlon.com/files/walsh-symphonic-band/spring-2023/walsh-symphonic-band-spring-2023-incredibles.mp4',
          format: 'video/mp4'
        },
        {
          url: 'https://mrhanlon.com/files/walsh-symphonic-band/spring-2023/walsh-symphonic-band-spring-2023-incredibles.webm',
          format: 'video/webm'
        }
      ]
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [selectedVideo]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Walsh Symphonic Band: Spring Concert, 2023</title>
      </Head>
      <main className={styles.main}>
        <h1>Walsh Symphonic Band: Spring Concert, 2023</h1>
        <div className={styles.videos}>
          <div className={styles.videoDisplay}>
            <video ref={videoRef} controls>
              {selectedVideo.formats.map((vf) => (
                <source key={vf.url} src={vf.url} type={vf.format} />
              ))}
            </video>
            <h5>{selectedVideo.title}</h5>
            {selectedVideo.description && <p>{selectedVideo.description}</p>}
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              {videos.map((v) => (
                <li
                  className={
                    selectedVideo.title === v.title
                      ? styles.navItemSelected
                      : styles.navItem
                  }
                  key={v.title}
                >
                  <a role={'button'} onClick={() => setSelectedVideo(v)}>
                    {v.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}

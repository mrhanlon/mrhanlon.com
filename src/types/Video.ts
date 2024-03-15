interface VideoFormat {
    format: 'video/mp4' | 'video/webm';
    url: string;
}

export interface Video {
    title: string;
    description?: string;
    formats: VideoFormat[];
}

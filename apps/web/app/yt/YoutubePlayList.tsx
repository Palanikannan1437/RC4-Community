import React from 'react';

interface IVideoData {
  kind: string;
  etag: string;
  id: string;
  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}

function YoutubePlaylist({
  PlayListData,
  count,
  sort,
  title,
  styleOverrides,
}: {
  PlayListData: IVideoData[];
  sort?: boolean;
  count?: number;
  title?: string;
  styleOverrides?: {
    main?: string;
    VideoListItem?: string;
    title?: string;
    VideoList?: string;
    VideoContainer?: string;
    VideoWidth?: string;
    VideoHeight?: string;
  };
}) {
  const defaultStyles = {
    main: 'container mx-auto p-8',
    title: 'text-3xl mb-6 text-center text-white',
    VideoList: 'grid grid-cols-1 gap-6',
    VideoListItem: 'border border-gray-300 rounded-lg overflow-hidden',
    VideoContainer: 'bg-white p-4 rounded shawdow-md aspect-w-16 aspect-h-9',
  };

  const styles = {
    main: `${defaultStyles.main} ${styleOverrides?.main ?? ''}`,
    VideoListItem: `${defaultStyles.VideoListItem} ${
      styleOverrides?.VideoListItem ?? ''
    }`,
    title: `${defaultStyles.title} ${styleOverrides?.title ?? ''}`,
    VideoList: `${defaultStyles.VideoList} ${styleOverrides?.VideoList ?? ''}`,
    VideoContainer: `${defaultStyles.VideoContainer} ${
      styleOverrides?.VideoContainer ?? ''
    }`,
    VideoWidth: `${styleOverrides?.VideoWidth ?? '500px'}`,
    VideoHeight: ` ${styleOverrides?.VideoHeight ?? '300px'}`,
  };

  let displayedVideos: IVideoData[] = PlayListData;

  if (sort) {
    displayedVideos = [...PlayListData].sort((a, b) => {
      const aValue = parseInt(a.statistics.viewCount, 10);
      const bValue = parseInt(b.statistics.viewCount, 10);
      return bValue - aValue;
    });
  }

  if (count && count < displayedVideos.length) {
    displayedVideos = displayedVideos.slice(0, count);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.VideoList}>
        {displayedVideos.map((video: IVideoData) => (
          <div key={video.id} className={styles.VideoListItem}>
            <div className={styles.VideoContainer}>
              <iframe
                width={styles.VideoWidth}
                height={styles.VideoHeight}
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YoutubePlaylist;

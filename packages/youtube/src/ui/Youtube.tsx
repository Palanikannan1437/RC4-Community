"use client"
import React, { useEffect, useState } from 'react';
import YTvideoPlayer from './YTvideoPlayer';
import getPlaylistSnippet from '../core/FetchPlaylist';
import sortData from '../core/SortVideos';

interface IYoutubePlaylistProps {
  playlistId: string;
  height: string;
  width: string;
  title: string;
  API_Key: string | undefined;
  count?: number;
  sort?: boolean;
}

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

const YoutubePlaylist: React.FC<IYoutubePlaylistProps> = ({
  playlistId,
  height,
  width,
  title,
  API_Key,
  count,
  sort,
}) => {
  const [videos, setVideos] = useState<IVideoData[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await getPlaylistSnippet(playlistId, API_Key);
      setVideos(fetchedVideos);

      if (sort) {
        const sortedVideos = await sortData(fetchedVideos);
        setVideos(sortedVideos);
      }
    };

    fetchVideos();
  }, [playlistId, API_Key, sort]);

  const displayedVideos = count ? videos.slice(0, count) : videos;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl mb-6 text-center text-white">{title}</h1>
      <div className="space-y-10">
        {displayedVideos.map((video: IVideoData) => (
          <YTvideoPlayer key={video.id} videoId={video.id} width={width} height={height} />
        ))}
      </div>
    </div>
  );
};

export default YoutubePlaylist;

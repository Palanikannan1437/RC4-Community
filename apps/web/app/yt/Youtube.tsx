"use client"
import React from 'react';
import YTvideoPlayer from './YTvideoPlayer';

interface IYTvideo {
  videoId: string;
  videoPublishedAt: string;
}

interface IYoutubePlaylistProps {
  playlistId: string;
  height: string;
  width: string;
  title: string;
  sorted: boolean;
  API_Key:string|undefined;
}

const getPlaylistSnippet = async (playlistId: string,API_Key:string|undefined): Promise<IYTvideo[]> => {

  try {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&maxResults=50&key=${API_Key}`);
    const data = await response.json();
    console.log(data);
    const { items } = data;
    const contentDetails: IYTvideo[] = items.map((item: any) => item.contentDetails);
    return contentDetails;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const YoutubePlaylist: React.FC<IYoutubePlaylistProps> = ({ playlistId, height, width, title, sorted,API_Key}) => {
  const [videos, setVideos] = React.useState<IYTvideo[]>([]);

  React.useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await getPlaylistSnippet(playlistId,API_Key);
      setVideos(fetchedVideos);
    };

    fetchVideos();
  }, [playlistId]);

  let sortedVideos: IYTvideo[];

  if (sorted) {
    sortedVideos = videos.sort((a, b) => {
      const aDate = new Date(a.videoPublishedAt).getTime();
      const bDate = new Date(b.videoPublishedAt).getTime();
      return bDate - aDate;
    });
  } else {
    sortedVideos = videos;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl mb-6 text-center text-white">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedVideos.map((video: IYTvideo) => (
          <YTvideoPlayer key={video.videoId} video={video} width={width} height={height} />
        ))}
      </div>
    </div>
  );
};

export default YoutubePlaylist;

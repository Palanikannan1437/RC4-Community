import React from 'react';

interface IYoutubePlaylistProps {
  PlayListData: IVideoData[];
  height: string;
  width: string;
  title: string;
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
  PlayListData,
  height,
  width,
  title,
  count,
  sort,
}) => {
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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl mb-6 text-center text-white">{title}</h1>
      <div className="grid grid-cols-1 gap-6">
        {displayedVideos.map((video: IVideoData) => (
          <div key={video.id} className="border border-gray-300 rounded-lg overflow-hidden">
            <YTvideoPlayer videoId={video.id} width={width} height={height} />
          </div>
        ))}
      </div>
    </div>
  );
};


interface Props {
    videoId: string;
    width: string;
    height: string;
}

const YTvideoPlayer: React.FC<Props> = ({ videoId, width, height }) => {
  const videoURL = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width={width}
          height={height}
          src={videoURL}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YoutubePlaylist;

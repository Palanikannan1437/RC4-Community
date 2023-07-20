import React from "react";

export interface IYTvideo {
    videoId: string;
    videoPublishedAt: string;
  }
  
  interface Props {
    video: IYTvideo;
    width: string;
    height: string;
  }
  
  const YTvideoPlayer = ({ video, width, height }: Props) => {
    const videoURL = `https://www.youtube.com/embed/${video.videoId}`;
  
    return (
      <div className="bg-white p-4 rounded shadow-md w-full">
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
  
  export default YTvideoPlayer;
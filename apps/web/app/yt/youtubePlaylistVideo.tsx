"use client"
import React, { useEffect, useState } from 'react';
import YTvideo from './YTvideo';

export default function PlaylistVideos({ playlistId, maxResults, title, videoWidth, videoHeight, API_Key }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getPlaylistSnippet = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&maxResults=${maxResults}&key=${API_Key}`
        );
        const data = await response.json();
        const { items } = data;
        const contentDetails = items.map((item) => item.contentDetails.videoId); 
        setVideos(contentDetails);
      } catch (error) {
        console.log(error);
      }
    };

    getPlaylistSnippet();
  }, [playlistId, maxResults, API_Key]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl mb-6 text-center text-white">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((videoId) => ( 
          <YTvideo key={videoId} video={videoId} width={videoWidth} height={videoHeight} /> 
        ))}
      </div>
    </div>
  );
};

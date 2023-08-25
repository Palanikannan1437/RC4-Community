import React from 'react';

import { YouTube } from '@youtube/src/YouTube';
// import { YouTube } from './YouTube';

const Home = async () => {
  const playlistId = 'PLee3gqXJQrFXj3VqMruL_uC-7pb21cG3g';
  const API_Key = process.env.GOOGLE_API_KEY as string;

  return (
    <YouTube
      playlistId={playlistId}
      API_Key={API_Key}
      sort={true}
      title="Gsoc 2023"
      count={3}
      styleOverrides={{ title: 'italic' }}
    />
  );
};

export default Home;

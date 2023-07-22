import React from 'react';

import YoutubePlaylist from './Youtube';


const Home = async () => {
  
  const playlistId = 'PLee3gqXJQrFXj3VqMruL_uC-7pb21cG3g';
  const API_Key = process.env.GOOGLE_API_KEY;

  return (
    <YoutubePlaylist
      playlistId={playlistId}
      count = {4}
      sort = {true}
      height={"300px"}
      width={"550px"}
      title={"Top GSOC 2022 Videos"}
      API_Key={API_Key}
    />
  );
};

export default Home;

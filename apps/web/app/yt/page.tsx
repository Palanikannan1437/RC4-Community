import React from 'react';

import YoutubePlaylist from './Youtube';
import getPlaylistSnippet from './FetchPlaylist';


const Home = async () => {
  const playlistId = 'PLee3gqXJQrFXj3VqMruL_uC-7pb21cG3g';
  const API_Key = process.env.GOOGLE_API_KEY;
  
  const PlayListData =  await getPlaylistSnippet(playlistId,API_Key)


  return (
    <YoutubePlaylist
      PlayListData={PlayListData}
      count = {3}
      sort = {true}
      height={"300px"}
      width={"550px"}
      title={"Top GSOC 2022 Videos"}
    />
  );
};

export default Home;

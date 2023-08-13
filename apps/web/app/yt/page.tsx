import React from 'react';

// import YoutubePlaylist from './Youtube';
// import getPlaylistSnippet from './FetchPlaylist';

import getPlaylistSnippet from '@youtube/src/core/FetchPlaylist';
import YoutubePlaylist from '@youtube/src/ui/Youtube';


const Home = async () => {
  const playlistId = 'PLee3gqXJQrFXj3VqMruL_uC-7pb21cG3g';
  const API_Key = process.env.GOOGLE_API_KEY;
  
  const PlayListData =  await getPlaylistSnippet(playlistId, API_Key)

  return (
    <YoutubePlaylist
      PlayListData={PlayListData}
      count = {3}
      sort = {false}
      title={"Top GSOC 2022 Videos"}
      styleOverrides={{
      }}
    />
  );
};

export default Home;
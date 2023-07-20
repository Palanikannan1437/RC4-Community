import React from 'react';

//Local 
// import YoutubePlaylist from './Youtube';

// Library 
import YoutubePlaylist from "youtube/Youtube";
// import { getPlaylistSnippet } from "youtube/functions";

// import "youtube/styles.css";

const Home = async () => {
  const playlistId = 'PLee3gqXJQrFXj3VqMruL_uC-7pb21cG3g';
  const API_Key = process.env.GOOGLE_API_KEY;


  return (
    <YoutubePlaylist
      playlistId={playlistId}
      height={"200px"}
      width={"450px"}
      title={"Title for Videos"}
      sorted={true}
      API_Key={API_Key}
    />
  );
};

export default Home;

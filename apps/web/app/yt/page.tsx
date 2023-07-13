import PlaylistVideos from './youtubePlaylistVideo'

export default function Home() {
  const playlistId = 'PLee3gqXJQrFXj3VqMruL_uC-7pb21cG3g';
  const maxResults = 4;
  const title = 'Youtube Playlist';
  const videoWidth = 500;
  const videoHeight = 250;
  const API_Key = process.env.GOOGLE_API_KEY;

  return (
    <PlaylistVideos
      playlistId={playlistId}
      maxResults={maxResults}
      title={title}
      videoWidth={videoWidth}
      videoHeight={videoHeight}
      API_Key={API_Key}
    />
  );
}

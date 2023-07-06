import YTvideo from './YTvideo'

const getPlaylistSnippet = async (playlistId: string) => {
  const API_Key = process.env.GOOGLE_API_KEY;
  
  try {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&maxResults=50&key=${API_Key}`);
    const data = await response.json();
    const {items} = data;
    const contentDetails = items.map(item => item.contentDetails);
    return contentDetails;
  } catch (error) {
    console.log(error);
  }
};


export default async function  Home() {  
  const playlistId = 'PLee3gqXJQrFXj3VqMruL_uC-7pb21cG3g';
  const videos = await getPlaylistSnippet(playlistId);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl mb-6 text-center text-white">YouTube Playlist Videos:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video) => (
          <YTvideo key={video.videoId} video={video} />
        ))}
      </div>
    </div>
  );
}
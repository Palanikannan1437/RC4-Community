interface IYTvideo {
    videoId: string;
    videoPublishedAt: string;
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

const getPlaylistSnippet = async (playlistId: string, API_Key: string | undefined):Promise<IVideoData[]>=> {

    let videos: IYTvideo[] = [];
    try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&maxResults=50&key=${API_Key}`);
        const data = await response.json();
        const { items } = data;
        videos = items.map((item: any) => ({
            videoId: item.contentDetails.videoId,
            videoPublishedAt: item.contentDetails.videoPublishedAt,
        }));
    } catch (error) {
        console.log(error);
        return [];
    }

    const videoDataPromises = videos.map(async (video) => {
        const videoID = video.videoId;
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoID}&key=${API_Key}`);
            const data = await response.json();
            const { items } = data;
            const videodata: IVideoData = items[0];
            return videodata;
        } catch (error) {
            console.log(error);
            return null;
        }
    });

    const videoDataResults = await Promise.all(videoDataPromises);
    return videoDataResults.filter((data) => data !== null) as IVideoData[];
};

export default getPlaylistSnippet;

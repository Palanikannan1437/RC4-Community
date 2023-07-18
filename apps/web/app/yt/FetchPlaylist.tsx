interface IYTvideo {
    videoId: string;
    videoPublishedAt: string;
}

export const getPlaylistSnippet = async (playlistId: string, API_Key: string | undefined): Promise<IYTvideo[]> => {
    try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${playlistId}&maxResults=50&key=${API_Key}`);
        const data = await response.json();
        const { items } = data;
        const contentDetails: IYTvideo[] = items.map((item: any) => item.contentDetails);
        return contentDetails;
    } catch (error) {
        console.log(error);
        return [];
    }
};


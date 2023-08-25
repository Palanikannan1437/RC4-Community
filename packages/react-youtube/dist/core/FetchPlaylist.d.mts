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
declare const getPlaylistSnippet: (playlistId: string, API_Key: string | undefined) => Promise<IVideoData[]>;

export { getPlaylistSnippet as default };

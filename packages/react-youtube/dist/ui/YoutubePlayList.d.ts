/// <reference types="react" />
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
declare function YoutubePlaylist({ PlayListData, count, sort, title, styleOverrides, }: {
    PlayListData: IVideoData[];
    sort?: boolean;
    count?: number;
    title?: string;
    styleOverrides?: {
        main?: string;
        VideoListItem?: string;
        title?: string;
        VideoList?: string;
        VideoContainer?: string;
        VideoWidth?: string;
        VideoHeight?: string;
    };
}): JSX.Element;
export default YoutubePlaylist;

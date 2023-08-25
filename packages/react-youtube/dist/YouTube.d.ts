export declare const YouTube: ({ playlistId, API_Key, count, sort, title, styleOverrides, }: {
    playlistId: string;
    API_Key: string;
    sort?: boolean | undefined;
    count?: number | undefined;
    title?: string | undefined;
    styleOverrides?: {
        main?: string | undefined;
        VideoListItem?: string | undefined;
        title?: string | undefined;
        VideoList?: string | undefined;
        VideoContainer?: string | undefined;
        VideoWidth?: string | undefined;
        VideoHeight?: string | undefined;
    } | undefined;
}) => JSX.Element;

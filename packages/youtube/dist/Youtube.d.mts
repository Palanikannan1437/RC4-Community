import React from 'react';

interface IYoutubePlaylistProps {
    playlistId: string;
    height: string;
    width: string;
    title: string;
    sorted: boolean;
    API_Key: string | undefined;
}
declare const YoutubePlaylist: React.FC<IYoutubePlaylistProps>;

export { YoutubePlaylist as default };

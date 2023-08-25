import { Suspense } from 'react';
import getPlaylistSnippet from './core/FetchPlaylist';
import YoutubePlaylist from './ui/YoutubePlayList';
import React from 'react';

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
const YTcontent = async ({
  playlistId,
  API_Key,
  sort,
  count,
  title,
  styleOverrides,
}: {
  playlistId: string;
  API_Key: string;
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
}) => {
  const PlayListData = (await getPlaylistSnippet(
    playlistId,
    API_Key
  )) as IVideoData[];

  return (
    <YoutubePlaylist
      PlayListData={PlayListData}
      sort={sort}
      count={count}
      title={title}
      styleOverrides={styleOverrides}
    />
  );
};

export const YouTube = ({
  playlistId,
  API_Key,
  count,
  sort,
  title,
  styleOverrides,
}: {
  playlistId: string;
  API_Key: string;
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
}) => (
  <Suspense>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <YTcontent
      playlistId={playlistId}
      API_Key={API_Key}
      sort={sort}
      count={count}
      title={title}
      styleOverrides={styleOverrides}
    />
  </Suspense>
);

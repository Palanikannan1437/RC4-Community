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
  
  const sortData = async (Data: IVideoData[]) => {
    // Sort the array based on the 'viewCount' property in ascending order
    const sortedData = Data.sort((a, b) => {
      const aValue = parseInt(a.statistics.viewCount, 10);
      const bValue = parseInt(b.statistics.viewCount, 10);
      return bValue - aValue;
    });
    
    console.log(sortedData)
    
    // Use the slice method to get the first 'count' number of objects from the sorted array
    return sortedData;
  };
  
  
  export default sortData;
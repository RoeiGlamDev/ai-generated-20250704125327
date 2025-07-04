// components/VideoPlayer.js
import Image from 'next/image';

const VideoPlayer = ({ src, poster, width, height }) => {
  return (
    <video
      src={src}
      poster={poster}
      width={width}
      height={height}
      controls
    />
  );
};

export default VideoPlayer;
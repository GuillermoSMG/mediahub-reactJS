import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function Videos({ videos }) {
  console.log(videos);
  return (
    <div>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, i) => (
          <Box key={i}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </Box>
        ))}
      </Stack>
    </div>
  );
}

export default Videos;

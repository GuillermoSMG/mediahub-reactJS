import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchApi } from "../utils/fetchApi";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  console.log(videos);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search results for:
        <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
      </Typography>
      {<Videos videos={videos} />}
    </Box>
  );
}

export default SearchFeed;

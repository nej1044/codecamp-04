import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 10px solid red;
`;

const LibraryYoutubePage = () => {
  return (
    <MyYoutube url="https://youtu.be/IO5u1m0TsJw" width={300} height={200} />
  );
};

export default LibraryYoutubePage;

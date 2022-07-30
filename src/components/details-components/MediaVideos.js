import styled from "styled-components";
import { API_KEY } from "../../services/api";
import useAxios from "../../hooks/useAxios";
import Scroll from "../details-components/ScrollContainer";

const VideoContainer = styled.div`
  div {
    width: 100%;
    height: 141px;

    div {
      width: 250px;
      height: 141px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 0 1px;

      a {
        width: 100% !important;
        height: 100% !important;
        display:flex;
        justify-content:center;
        align-items:center;

        i{
        font-size:5rem;
        color:#ddd8;
        }

      }
    }
  }
`;

const MediaVideos = (props) => {
  const [response, isError, isLoading] = useAxios({
    url: `/${props.mediaType}/${props.id}/videos?api_key=${API_KEY}&language=en-US&page=1`,
  });

  return (
    <Scroll>
      {!isLoading &&
        response.data.results.map((video, id) => (
          <VideoContainer key={video.key}>
            <div>
              <div
                style={{
                  backgroundImage: `url('https://i.ytimg.com/vi/${video.key}/hqdefault.jpg')`,
                }}
              >
                <a href={`https://www.youtube.com/watch?v=${video.key}`} target="_blank">
                  <i
                    className="bi bi-play-circle-fill"
                  ></i>
                </a>
              </div>
            </div>
          </VideoContainer>
        ))}
    </Scroll>
  );
};

export default MediaVideos;

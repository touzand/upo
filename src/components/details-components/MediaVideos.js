import styled from "styled-components";
import { API_KEY } from "../../services/api";
import useAxios from "../../hooks/useAxios";
import Scroll from "../details-components/ScrollContainer";
import { Link, useParams } from "react-router-dom";

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
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          font-size: 5rem;
          color: #ddd8;
        }
      }
    }
  }
`;

const MediaVideos = (props) => {
  const { key } = useParams();
  const [response, isError, isLoading] = useAxios({
    url: `/${props.mediaType}/${props.id}/videos?api_key=${API_KEY}&language=en-US&page=1`,
  });

  return (
    <div>
      {!isLoading && response.data.results.length !== 0 && (
        <div>
          <h3 style={{ marginLeft: "1rem" }}>Visual content</h3>
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
                      <Link to={`${video.key}`}>
                        <i className="bi bi-play-circle-fill"></i>
                      </Link>
                    </div>
                  </div>
                </VideoContainer>
              ))}
          </Scroll>
        </div>
      )}
    </div>
  );
};

export default MediaVideos;

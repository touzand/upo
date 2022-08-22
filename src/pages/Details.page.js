import useAxios from "../hooks/useAxios";
import { API_KEY, api } from "../services/api";
import Loader from "../components/Loader";
import Container from "../components/details-components/Container";
import Header from "../components/details-components/HeaderContainer";
import Body from "../components/details-components/BodyContainer";
import Similar from "../components/details-components/Similar";
import Data from "../components/details-components/Data";
import DetailsInfo from "../components/details-components/DetailsInfo";
import { useParams } from "react-router";

const Details = ({ mediaType, children }) => {
  const { id } = useParams();

  const [response, isError, isLoading] = useAxios({
    url: `/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`,
  });

  let media = response.data;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <div className="general-body-container">
            <Header api={api} media={media} />
            <Body
              api={api}
              media={media}
              apiKey={API_KEY}
              id={id}
              mediaType={mediaType}
            />
          </div>
          <DetailsInfo
            mediaType={mediaType}
            id={id}
            apiKey={API_KEY}
            api={api}
            media={media}
            isLoading={isLoading}
          />
          <Similar id={id} mediaType={mediaType} />
          <Data media={media} />
        </Container>
      )}
      {children}
    </div>
  );
};
export default Details;

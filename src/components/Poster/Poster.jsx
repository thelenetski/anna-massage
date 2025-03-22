import { useState } from "react";
import Loader from "../Loader/Loader";

const Poster = ({ link, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader />}
      <img
        src={link}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </>
  );
};

export default Poster;

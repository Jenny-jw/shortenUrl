import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ResultUrl = () => {
  const [searchParams] = useSearchParams();
  const shortenedUrl = searchParams.get("short");

  if (!shortenedUrl) return <p>Short URL not found</p>;

  // useEffect(() => {
  //   const fecthUrl = async () => {
  //     const res = await axios.get("", {
  //       params: shortenedUrl ? { shortenedUrl } : {},
  //     });
  //   };
  // });

  return (
    <div>
      <h3>This is your shortened URL:</h3>
      <p>{`https://localhost:3000/${shortenedUrl}`}</p>
    </div>
  );
};

export default ResultUrl;

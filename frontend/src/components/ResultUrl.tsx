import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ResultUrl: React.FC = () => {
  const [searchParams] = useSearchParams();
  const shortenedUrl = searchParams.get("short");
  const [originUrl, setOriginUrl] = useState<string>("");

  useEffect(() => {
    if (!shortenedUrl) return;
    axios
      .get(`/api/urls/${shortenedUrl}`)
      .then((res) => {
        setOriginUrl(res.data.originUrl);
      })
      .catch((err) => console.log("Failed to fetch origin URL", err));
  }, [shortenedUrl, originUrl]);

  // copy後出現的是http://localhost:5173/14e710da，無法貼上後到對的網站
  const handleCopy = () => {
    const fullShortUrl = `${window.location.origin}/${shortenedUrl}`;
    navigator.clipboard.writeText(fullShortUrl).then(() => {
      alert("Short URL copied to clipboard!");
    });
  };

  if (!shortenedUrl) return <p>Cannot find shorted URL parameter</p>;
  if (!originUrl) return <p>Loading...</p>;

  const fullShourtenUrl = `${window.location.origin}/${shortenedUrl}`;

  return (
    <div>
      <p>This is your shortened URL:</p>
      {/* Click the link to redirect to the page */}
      <a href={originUrl} target="_blank" rel="noopener noreferrer">
        {fullShourtenUrl}
      </a>
      {/* Button to copy the link. */}
      <button onClick={handleCopy}>Copy</button>
      <h3>Origin URL you input:</h3>
      <a href={originUrl} target="_blank" rel="noopener noreferrer">
        {originUrl}
      </a>
    </div>
  );
};

export default ResultUrl;

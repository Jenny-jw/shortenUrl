import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import common from "../styles/Common.module.css";

const ResultUrl: React.FC = () => {
  const [searchParams] = useSearchParams();
  const shortenedUrl = searchParams.get("short");
  const [originUrl, setOriginUrl] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!shortenedUrl) return;
    axios
      .get(`/api/urls/${shortenedUrl}`)
      .then((res) => {
        setOriginUrl(res.data.originUrl);
      })
      .catch((err) => console.log("Failed to fetch origin URL", err));
  }, [shortenedUrl, originUrl]);

  if (!shortenedUrl) return <p>Cannot find shorted URL parameter</p>;
  if (!originUrl) return <p>Loading...</p>;

  const fullShourtenUrl = `http://localhost:3000/api/urls/redirect/${shortenedUrl}`;

  return (
    <>
      <div className={`${common.container}`}>
        <p>This is your shortened URL:</p>
        {/* Click the link to call the API: GET /api/urls/redirect/:shortenedUrl */}
        <a href={fullShourtenUrl} target="_blank" rel="noopener noreferrer">
          {fullShourtenUrl}
        </a>
        {/* Button to copy the link. */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(fullShourtenUrl).then(() => {
              alert("Short URL copied!");
            });
          }}
        >
          Copy
        </button>
      </div>
      <div className={`${common.container}`}>
        <p>Origin URL you input:</p>
        <a href={originUrl} target="_blank" rel="noopener noreferrer">
          {originUrl}
        </a>
      </div>
      <div className={`${common.container}`} onClick={() => navigate("/")}>
        <button>Shorten another URL</button>
      </div>
    </>
  );
};

export default ResultUrl;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import common from "../styles/Common.module.css";

const InputUrl = () => {
  const [originUrl, setOriginUrl] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/urls/shorten", { originUrl });
      const shortenedUrl = res.data.shortenedUrl;
      console.log("See what you got~");
      setOriginUrl("");
      navigate(`/result?short=${shortenedUrl}`);
    } catch (err) {
      alert("Fail to submit URL");
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${common.container}`}>
      <p>Input the URL you wanna shorten:</p>
      <input
        value={originUrl}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setOriginUrl(e.target.value)
        }
        placeholder="Url..."
        required
      />
      <button type="submit">Shorten it!</button>
    </form>
  );
};

export default InputUrl;

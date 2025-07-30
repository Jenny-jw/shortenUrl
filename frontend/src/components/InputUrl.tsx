import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InputUrl = () => {
  const [originUrl, setOriginUrl] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const response =
      await axios.post("/api/urls/shorten", { originUrl });
      // const data = response.json();
      // const shortenedUrl = data.shortenedUrl;
      alert("See what you got~");
      setOriginUrl("");
      navigate("/result");
    } catch (err) {
      alert("Fail to submit URL");
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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

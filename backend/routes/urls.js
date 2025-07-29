import express from "express";
import crypto from "crypto";
import Url from "../models/Url.js";

const router = express.Router();
// hash, random string, base62
const hashShorten = (originalUrl) => {
  const hash = crypto.createHash("sha256").update(originalUrl).digest("hex");
  return hash.slice(0, 8);
};
const randomString = (length = 8) => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let output = "";
  for (let i = 0; i < length; i++) {
    output += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return output;
};

// POST /api/urls/shorten
router.post("/shorten", async (req, res) => {
  try {
    const { originUrl } = req.body;
    // 驗證 originalUrl 合法性
    // 檢查是否已存在相同紀錄
    // 若無，產生一組短碼
    const shortenedUrl = hashShorten(originUrl);
    // 儲存到資料庫
    const url = new Url({ originUrl, shortenedUrl });
    await url.save();
    res.json(url);
  } catch (err) {
    res.status(500).json({ error: "Fail to shorten URL." });
  }
});

// GET /:shortId

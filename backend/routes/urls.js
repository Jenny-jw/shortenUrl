import express from "express";
import crypto from "crypto";
import Url from "../models/Url.js";

const router = express.Router();
// hash, random string, base62
const hashShorten = (originUrl) => {
  const hash = crypto.createHash("sha256").update(originUrl).digest("hex");
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
    const shortenedUrl = hashShorten(originUrl);
    const url = new Url({ originUrl, shortenedUrl });
    await url.save();
    res.json(url);
  } catch (err) {
    res.status(500).json({ error: "Fail to shorten URL." });
  }
});

// GET /api/urls/:shortenedUrl, for searching origin URL
router.get("/:shortenedUrl", async (req, res) => {
  try {
    const url = await Url.findOne({ shortenedUrl: req.params.shortenedUrl });
    if (!url) return res.status(404).json({ error: "Canoot find the url" });
    res.json({ originUrl: url.originUrl });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

// GET /api/urls/redirect/:shortenedUrl, for redirecting
router.get("/redirect/:shortenedUrl", async (req, res) => {
  try {
    const url = await Url.findOne({ shortenedUrl: req.params.shortenedUrl });
    if (!url) return res.status(404).json({ error: "Canoot find the url" });
    res.redirect(url.originUrl);
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

const urlsRouter = router;
export default urlsRouter;

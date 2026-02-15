const router = require("express").Router();

router.get("/health", (req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || "dev" });
});

module.exports = router;

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {            // GET /authors
  res.json([{ id: 1, name: "J.R.R. Tolkien" }]);
});

export default router;

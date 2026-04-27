import { Router } from "express";
import {
  getShortenerPage,
  postURLShortner,
  redirectToShortLink,
} from "../controllers/postshortener.controller.js";

const router = Router();

router.get("/report", (req, res) => {
  const student = [
    {
      name: "Aarav",
      grade: "10th",
      favoriteSubject: "Mathmatics",
    },
    {
      name: "Ishita",
      grade: "9th",
      favoriteSubject: "Science",
    },
    {
      name: "Rohan",
      grade: "8th",
      favoriteSubject: "Physics",
    },
    {
      name: "Arbham",
      grade: "12th",
      favoriteSubject: "Chemistry",
    },
  ];

  return res.render("report", { student });
});

router.get("/", getShortenerPage);

router.post("/", postURLShortner);

router.get("/:shortCode", redirectToShortLink);

//default export
export default router;

//name exports
//export const shortenedRoutes = router;

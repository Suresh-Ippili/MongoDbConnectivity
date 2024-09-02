import express from "express";
const router = express.Router();

import studentController from "../controllers/studentController.js";

router.get("/", studentController.getAll);
router.get("/:id", studentController.getById)
router.post("/" , studentController.createStduent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

export default router;
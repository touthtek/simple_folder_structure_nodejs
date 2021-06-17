const express = require('express');
const router = express.Router();

const studentController = require('../controller/studentcontroller');



router.get("/", studentController.getAllStudent);
router.get("/:id", studentController.getallStudentById);

module.exports = router;
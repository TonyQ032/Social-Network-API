const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought
} = require("../../controllers/thoughtController");

router.route("/")
  .get(getAllThoughts);

router.route("/:id")
  .get(getThoughtById)
  .post(createThought);

module.exports = router;
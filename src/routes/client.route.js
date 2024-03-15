const { Router } = require("express");
const {
  index,
  save,
  remove,
  update,
} = require("../controllers/client.controller");
const router = Router();

router.get("/api/clients", index);
router.post("/api/clients", save);
router.put("/api/clients/:id", update);
router.delete("/api/clients/:id", remove);

module.exports = router;

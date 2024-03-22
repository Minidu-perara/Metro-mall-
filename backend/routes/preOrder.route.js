const express = require("express");
const router = express.Router();
const {addPreOrder,getPreorders,deletePreorders,getAllPreorders}=require("../controllers/preOrder.controller");

router.post("/addPreOrder",addPreOrder);
router.get("/preorders/:userId",getPreorders);
router.get("/preorders",getAllPreorders);
router.delete("/preorders/:id",deletePreorders);

module.exports = router;
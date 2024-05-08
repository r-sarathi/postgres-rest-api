const { authentication, restrictTo } = require("../controller/auth-controller");
const { getAllUser } = require("../controller/user-controller");

const router = require("express").Router();

router.get("/", authentication, restrictTo("0"), getAllUser);

module.exports = router;

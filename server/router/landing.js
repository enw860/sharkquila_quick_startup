const os = require('os');
var path = require('path');

const express = require("express");
const router = express.Router();

// get current os user name
router.get("/username", (req, res) => {
    const currentUser = os.userInfo();
    res.send({
        username: currentUser.username
    });
});

module.exports = router;
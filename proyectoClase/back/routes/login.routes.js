var express = require("express");
var router = express.Router();
const loginController = require("../controllers/login.controller");

/* GET home page */
router.post("/login", async function (request, response) {
    const result = await loginController.getLogin(
        request.body.username,
        request.body.password
    );
    
    response.status(200).json ({
        status: true,
        message: !result ? "Credenciales incorrectas" : "Login correcto",
        info: result,
    });
});

module.exports = router;
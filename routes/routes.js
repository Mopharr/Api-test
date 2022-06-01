const express = require("express");
const router = express.Router();
const Joi = require("joi");

router.post("/signin", async (request, response) => {
  try {
    const { userName, password } = request.body;

    if (userName === "tanzkid" && password === "tanzkid") {
      return response.send({ status: 200, data: { userName, password } });
    } else {
      return response.send({
        status: 403,
        message: "Username or Password not correct",
      });
    }
  } catch (error) {
    response.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router;

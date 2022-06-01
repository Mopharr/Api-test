const { response } = require("express");
const express = require("express");
const router = express.Router();
const Joi = require("joi");
const User = require('../model/user')

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

router.get('/get_user', async (request, response) => {
  try{
    const user = await User.find()

    response.status(200).send({
      success: true,
      data: user
    })
  }
  catch (error) {
    response.status(500).send(error.message)
  }
})

router.post('/post_user', async (request, response) => {
  try {

    const user = await User.create(request.body)

    response.status(201).send({
      success: true,
      data: user
    })
    
  } catch (error) {
    response.status(500).send(error.message)
  }
})

module.exports = router;

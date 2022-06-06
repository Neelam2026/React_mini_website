const express = require("express")
const Home=require("../models/home.model")
const router=express.Router()


router.get("", async (req, res) => {
    try {
      const home = await Home.find().lean().exec();
     return res.status(200).send({ home: home }); // []
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports=router;
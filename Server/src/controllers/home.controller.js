const express = require("express")
const Home=require("../models/home.model")
const router=express.Router()


router.get("", async (req, res) => {
    try {
        const page=req.query.page||1;
        const pagesize=req.query.pagesize||10
        const skip=(page-1)*pagesize
        //  const filter1=req.query.filter
        //  const filtervalue=req.query.filtervalue
        // console.log("abdgehfwhhdkhb",filter1,filtervalue)
       
        //  if(filter1){
            
        //      console.log("aa na ",{[filter1]:filtervalue})
        //  let home = await Home.find({[filter1]:filtervalue}).lean().exec();
        //  return res.status(200).send({ home: home }) ;
        // }
        let home = await Home.find().skip(skip).limit(pagesize).lean().exec();
     return res.status(200).send({ home: home }) ; // []
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

 

  module.exports=router;
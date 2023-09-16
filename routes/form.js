const router = require('express').Router()
const formModel = require("../models/formModel")



  router.get("/", async function (req, res) {
    await formModel.create(req.query)
    res.send(" Your Form is Submitted Successfully!")
})

router.get("/record", async function (req, res) {
  var form = await formModel.find()
  res.json(form)
})


module.exports = router ;

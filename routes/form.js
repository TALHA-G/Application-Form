const router = require('express').Router()
const formModel = require("../models/formModel")



  router.get("/form/registration", async function (req, res) {
    var form = await formModel.create(req.query)
    res.send(" Your Form is Submitted Successfully!")
})

module.exports = router ;

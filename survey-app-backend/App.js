const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/survey", (request, response) => {
    const getName = (request.body.name)
    const getGender = (request.body.gender)
    const getBloodGrp = (request.body.blood_group)
    const getPinCode = (request.body.pin_code)
    const getMobileNo = (request.body.mobile_no)

    response.json({
        "status": "Success",
        "result": {
            "name": getName,
            "gender": getGender,
            "blood_group": getBloodGrp,
            "pin_code": getPinCode,
            "mobile_no": getMobileNo,
        }
    })
})

app.listen(4000, () => {
    console.log("Srever is Running <3")
})
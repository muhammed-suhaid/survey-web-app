import React, { useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const AddDetails = () => {
    const [input, changeInput] = useState(
        {
            "name": "",
            "gender": "",
            "blood_group": "",
            "pin_code": "",
            "mobile_no": ""
        }
    )

    const [isData, changeIsData] = useState(false)

    const [output, changeOutput] = useState(
        {
            "status": "",
            "result": {
                "name": "",
                "gender": "",
                "blood_group": "",
                "pin_code": "",
                "mobile_no": ""
            }
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const onButtonClick = () => {
        console.log(input)
        axios.post("http://Localhost:4000/survey", input)
            .then((response) => {
                changeOutput(response.data.result)
                changeIsData(true)
            })
            .catch(() => { console.log("Something went Wrong!") })
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 p-5">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label d-block">Gender</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="Male" checked={input.gender === "Male"} onChange={inputHandler} />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="Female" checked={input.gender === "Female"} onChange={inputHandler} />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="other" value="Other" checked={input.gender === "Other"} onChange={inputHandler} />
                                    <label className="form-check-label" htmlFor="other">Other</label>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood Group</label>
                                <select name="blood_group" className="form-control" value={input.blood_group} onChange={inputHandler}>
                                    <option value="" disabled>--choose--</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pin Code</label>
                                <input type="text" className="form-control" name="pin_code" value={input.pin_code} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" name="mobile_no" value={input.mobile_no} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success" type="button" onClick={onButtonClick}>SUBMIT</button>
                                </div>
                            </div>
                            {/* Display Card */}
                            {isData ? <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title" align="center">Survey Result</h5>
                                        <p className="card-text"><strong>Name:</strong> {output.name}</p>
                                        <p className="card-text"><strong>Gender:</strong> {output.gender}</p>
                                        <p className="card-text"><strong>Blood Group:</strong> {output.blood_group}</p>
                                        <p className="card-text"><strong>Pin Code:</strong> {output.pin_code}</p>
                                        <p className="card-text"><strong>Mobile Number:</strong> {output.mobile_no}</p>
                                    </div>
                                </div>
                            </div> : <p></p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDetails
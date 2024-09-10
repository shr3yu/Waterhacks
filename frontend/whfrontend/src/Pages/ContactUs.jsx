import React, { useState } from "react";
import Navbar from "../assets/Navbar";
import "./ContactUs.css";

function ContactUs(){
    return (
        <>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className = "contact">
                <br></br>
                <h className="heading">ANY QUESTIONS OR CONCERNS?</h>
                <br></br>
                <p className="text">Email us: inquiries@waterlink.ca</p>
            </div>
        </>
    )
}

export default ContactUs;
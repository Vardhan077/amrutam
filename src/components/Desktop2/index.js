import Header from "../Header"
import { IoLocationSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoIosLink } from "react-icons/io";
import { RiGraduationCapLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";


import './index.css'
const Desktop2 = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="Dcontainer">
                <h1 className="headingD">Find expert Doctors for an In-clinic session here </h1>
                <div className="x1">
                    <div className="locationContainer">
                        <IoLocationSharp className="locationIcon" />
                        <select className="select">
                            <option>Select Location</option>
                            <option>Hyderabad</option>
                            <option>Chennai</option>
                            <option>Banglore</option>
                            <option>Mumbai</option>
                        </select>
                    </div>
                    <input className="input" type="text" placeholder="eg. Doctor, specialisation, clinic name" />
                </div>
            </div>
            <div className="selection2">
                <div className="select1">
                    <select className="select2">
                        <option>Expertise</option>
                        <option>Pregnancy</option>
                        <option>Pelvic Pain</option>
                        <option>Endometriosis</option>
                        <option>Skin</option>
                    </select>
                </div>
                <div className="select1">
                    <select className="select2">
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="select1">
                    <select className="select2">
                        <option>Fee</option>
                        <option>1000</option>
                        <option>10,000</option>
                        <option>10,000+</option>
                    </select>
                </div>
                <div className="select1">
                    <select className="select2">
                        <option>Languages</option>
                        <option>English</option>
                        <option>Telugu</option>
                        <option>Hindi</option>
                        <option>Marathi</option>
                    </select>
                </div>
                <div className="select1">
                    <select className="select3">
                        <option>All filters</option>
                        <option>Age</option>
                        <option>Languages</option>
                        <option>Fee</option>
                        <option>Gender</option>
                    </select>
                </div>
            </div>
            <span className="line"><hr /></span>
            <div className="y">
                <div className="o1">
                    <span className="p1">Hair care</span><RxCross2 className="cross" />
                </div>
                <div className="o1">
                    <span className="p1">Female</span><RxCross2 className="cross" />
                </div>
                <div className="o1">
                    <span className="p1">Rs.0-Rs.500</span><RxCross2 className="cross" />
                </div>
                <div className="o1">
                    <span className="p1">Hindi</span><RxCross2 className="cross" />
                </div>
            </div>

            <div className="boxElement">
                <div className="box1">
                    <div>
                        <img className="pic1" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713535195/Group_39487_ljjcuj.png" alt="image"  />
                    </div>
                    <p className="name">Dr.Prerna Narang</p>
                    <p className="p3"><IoIosLink className="linkIcon" />Male-Female infertility</p>
                    <p className="p3"><RiGraduationCapLine className="linkIcon" />7 years of Experience</p>
                    <p className="p3"><BiMessageDetail className="linkIcon" />Speaks: English, Hindi, Marathi</p>
                    <div className="con">
                        <div className="pay">
                            <span className="p3">Video Consultation</span>
                            <span className="p4">$800</span>
                        </div>
                        <div className="pay">
                            <span className="p3">Chat Consultation</span>
                            <span className="p4">Free</span>
                        </div>
                    </div>
                    <div className="buttonContainer">
                    <button className="viewButton">View Profile</button>
                    <button className="bookButton">Book a Consultation</button>
                    </div>
                    

                </div>
                <div className="box1">
                    <div>
                        <img className="pic1" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713535195/Group_39487_ljjcuj.png" alt="image"  />
                    </div>
                    <p className="name">Dr.Prerna Narang</p>
                    <p className="p3"><IoIosLink className="linkIcon" />Male-Female infertility</p>
                    <p className="p3"><RiGraduationCapLine className="linkIcon" />7 years of Experience</p>
                    <p className="p3"><BiMessageDetail className="linkIcon" />Speaks: English, Hindi, Marathi</p>
                    <div className="con">
                        <div className="pay">
                            <span className="p3">Video Consultation</span>
                            <span className="p4">$800</span>
                        </div>
                        <div className="pay">
                            <span className="p3">Chat Consultation</span>
                            <span className="p4">Free</span>
                        </div>
                    </div>
                    <div className="buttonContainer">
                    <button className="viewButton">View Profile</button>
                    <button className="bookButton">Book a Consultation</button>
                    </div>
                    

                </div>
                <div className="box1">
                    <div>
                        <img className="pic1" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713535195/Group_39487_ljjcuj.png" alt="image"  />
                    </div>
                    <p className="name">Dr.Prerna Narang</p>
                    <p className="p3"><IoIosLink className="linkIcon" />Male-Female infertility</p>
                    <p className="p3"><RiGraduationCapLine className="linkIcon" />7 years of Experience</p>
                    <p className="p3"><BiMessageDetail className="linkIcon" />Speaks: English, Hindi, Marathi</p>
                    <div className="con">
                        <div className="pay">
                            <span className="p3">Video Consultation</span>
                            <span className="p4">$800</span>
                        </div>
                        <div className="pay">
                            <span className="p3">Chat Consultation</span>
                            <span className="p4">Free</span>
                        </div>
                    </div>
                    <div className="buttonContainer">
                    <button className="viewButton">View Profile</button>
                    <button className="bookButton">Book a Consultation</button>
                    </div>
                    

                </div>
            </div>

        </div>
    )
}

export default Desktop2
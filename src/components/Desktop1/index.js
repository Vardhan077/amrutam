import Header from "../Header"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FiArrowRightCircle } from "react-icons/fi";




import './index.css'
const Desktop1 = () => {
    return (
        <div className="mainContainer">
            <div className="header">
                <Header />
            </div>

            <div className="top">
                <div className="container">
                    <div className='userDetails'>
                        <div className="profileC">
                            <img className="profilePic" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713501105/v1_39_gs01rv.png" alt="image" />
                        </div>
                        <div className="name">
                            <div className="bruceC">
                                <p className="bruce">Dr.Bruce Willis</p>
                                <img className="verified" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713465127/verified_g5qdvy.png" alt="image"  />
                            </div>
                            <p className="prof">Gynecologist</p>
                            <div className="rating">
                                <p className="num">4.2</p>
                                <div className="starC">
                                    <img className="star" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713500193/star_h3zuze.png" alt="image" />
                                    <img className="star" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713500193/star_h3zuze.png" alt="image" />
                                    <img className="star" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713500193/star_h3zuze.png" alt="image" />
                                    <img className="star" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713500193/star_h3zuze.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="follow">
                            <div className="followers">
                                <p className="f">Followers</p>
                                <p className="f1">850</p>
                            </div>
                            <div className="following">
                                <p className="f">Following</p>
                                <p className="f1">18k</p>
                            </div><div className="posts">
                                <p className="f">Posts</p>
                                <p className="f1">250</p>
                            </div>
                            <div className="bc">
                                <button className="button">Book an Appointment</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bottomContainers">
                <div className="leftContainer">
                    <div className="aboutMe">
                        <div className="head">
                            <p className="aboutHead">A Little About me</p>
                            <button className="followB">Follow</button>
                        </div>
                        <p className="aboutPara">Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>
                        <div className="lanSec">
                            <p className="lan">Languages Spoken</p>
                            <p className="l1"> English</p>
                            <p className="l1"> Hindi</p>
                            <p className="l1"> Telugu</p>
                        </div>
                        <div className="icons">
                            <FaInstagram className="i1" />
                            <CiFacebook className="i1" />
                            <FiYoutube className="i1" />
                            <FiTwitter className="i1" />

                        </div>

                    </div>

                    <div className="special">
                        <div className="head">
                            <p className="spclHead">I Specialize In</p>
                        </div>

                        <div className="pic">
                            <div className="item">
                                <img className="pic1" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713517924/Women_1_zoxl8f.png" alt="image" />
                                <p className="s">Women's Health</p>
                            </div>
                            <div className="item">
                                <img className="pic1" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713517924/Skincare_1_bvgb9c.png" alt="image" />
                                <p className="s">Skin Care</p>
                            </div>
                            <div className="item">
                                <img className="pic1" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713517924/Immunity_1_rnhimf.png" alt="image" />
                                <p className="s">Immunity</p>
                            </div>
                            <div className="item">
                                <img className="pic1" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713517924/Hair_1_s57g4g.png"alt="image"  />
                                <p className="s">Hair Care</p>
                            </div>
                        </div>
                    </div>

                    <div className="concerns ">
                        <div className="head">
                            <p className="aboutHead">The Concers I Treat</p>
                        </div>
                        <div className="items">
                            <span className="l2">Skin Treatment</span>
                            <span className="l2">Pregnancy</span>
                            <span className="l2">Period Doubts</span>
                            <span className="l2">Endometriosis</span>
                            <span className="l2">Pelvic Pain</span>
                            <span className="l2">Ovarian Cysts</span>
                            <span className="l2">+5 More</span>
                        </div>
                    </div>

                    <div className="experience">
                        <div className="head">
                            <p className="aboutHead">My Work Experience</p>
                        </div>
                        <div className="bottom  ">
                            <p className="expHead ">I HAVE BEEN IN PRACTICE FOR:7+ YEARS</p>
                            <hr />
                            <div className="o">
                                <img className="home" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713517924/material-symbols_home-work-outline-rounded_phnuyd.png"alt="image"  />
                                <div className="midtown">
                                    <p className="p1">Midtown Medical Clinic</p>
                                    <p>Senior doctor</p>
                                </div>
                                <p className="date">2016-PRESENT</p>
                            </div>
                            <div className="o">
                                <img className="home" src="https://res.cloudinary.com/dg9itycrz/image/upload/v1713517924/material-symbols_home-work-outline-rounded_phnuyd.png" alt="image" />
                                <div className="midtown">
                                    <p className="p1">Midtown Medical Clinic</p>
                                    <p>Senior doctor</p>
                                </div>
                                <p className="date">2010-2015</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="head">
                        <p className="aboutHead">Appointment Fee</p>
                        <p className="price">$699.00</p>
                    </div>
                    <div className="One">
                        <p className="OnePara">Select your mode of Session</p><span className="line"><hr/></span>
                    </div>
                    <div className="Two">
                        <div className="t1">
                            <p>In-Clinic</p>
                            <p>45 Mins</p>
                        </div>
                        <div className="t2">
                            <p>Video</p>
                            <p>45 Mins</p>
                        </div>
                        <div className="t1">
                            <p>Chat</p>
                            <p>10 Mins</p>
                        </div>
                    </div>
                    <div className="One">
                        <p className="OnePara">Pick a time Slot</p><span className="line1"><hr/></span><CiCalendar className="icon" />
                    </div>
                    <div className="timeSlot">
                        <BsArrowLeftCircle className="la" />
                        <div className="timeSlotGreen">
                            <p>Mon, 10 Oct</p>
                            <p>10 slots</p>
                        </div>
                        <div className="timeSlotRed">
                            <p>Tue, 11 Oct</p>
                            <p>02 slots</p>
                        </div>
                        <div className="timeSlotYellow">
                            <p>Wed, 12 Oct</p>
                            <p>05 slots</p>
                        </div>
                        <FiArrowRightCircle className="ra" />
                    </div>
                    <p className="mrng">Morning</p>
                    <span className="time">09:00 AM</span>
                    <span className="time">09:30 AM</span>
                    <span className="time">10:00 AM</span>
                    <span className="time">10:15 AM</span>
                    <span className="time">10:45 AM</span>
                    <span className="timeGreen">11:00 AM</span>


                    <p className="mrng">Evening</p>
                    <span className="time">04:00 PM</span>
                    <span className="time">04:15 PM</span>
                    <span className="time">04:30 PM</span>
                    <span className="time">04:45 PM</span>
                    <span className="time">05:15 PM</span>
                    
                    <div className="btnElement">
                    <button className="appointment">Make An Appointment</button>

                    </div>



                


                </div>
            </div>
           

        </div>
    )

}

export default Desktop1
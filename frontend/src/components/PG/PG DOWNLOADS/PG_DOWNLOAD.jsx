import React from 'react'
import { Nav } from '../../UG/Nav';
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import image from './Images/plan-your-online-course-removebg-preview.png'
import jeeMain from './Images/JeeMainCourse-removebg-preview.png'
import jeemains from './Images/JEE_MAINS__image-removebg-preview.png'
import neetimg from './Images/neet_image-removebg-preview.png'
import apeapcetimg from './Images/Ap-Eapcetimage-removebg-preview.png'
import tseamcetimg from './Images/kcetimage-removebg-preview.png'
import kcetimage from './Images/tseamcetimage-removebg-preview.png'
import mhcetimage from './Images/mhcetimage-removebg-preview.png'
import wbjeeimage from './Images/wbjeeimage-removebg-preview.png'
import neetimage from './Images/neetimagedownload-removebg-preview.png'
import Footer from '../../UG/Footer';




const PG_DOWNLOAD = () => {
    return (
        <div>
            {/* import logo from '../../logo2.jpeg' */}
            <div>
                <div className="ugexam_header">
                    {Nav.map((NavData, index) => {
                        return (
                            <div className="header ug_exam_header" key={index}>
                                <div className={NavData.logo_img_container}>
                                    <Link to={"/"}>
                                        <img src={NavData.logo} alt="" />
                                    </Link>
                                </div>

                                <div className="exam_login_menu  ">
                                    <li>
                                        <Link to='/PgHome' className={NavData.navlist} id='exam_login_menu_home'>
                                            <IoMdHome /> {NavData.link1}
                                        </Link>
                                    </li>

                                </div>
                            </div>

                        );
                    })}
                </div>
            </div>

            <div className="Downloadsdiv">
                <div className="DownloadsUgdiv">
                    <h1>PG EXAMS</h1>
                    <div className="DownloadsUgButton">
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={kcetimage} alt="" />
                            </div>
                            <a href="/gatedownload">GATE</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={jeeMain} alt="" />
                            </div>
                            <a href="/iitjamdownload">IITJAM</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={neetimage} alt="" />
                            </div>
                            <a href="/esedownload">ESE</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={tseamcetimg} alt="" />
                            </div>
                            <a href="/tifrdownload">TIFR</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={apeapcetimg} alt="" />
                            </div>
                            <a href="/isrodownload">ISRO</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={jeemains} alt="" />
                            </div>
                            <a href="/barcdownload">BARC</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={mhcetimage} alt="" />
                            </div>
                            <a href="/jestdownload">JEST</a>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PG_DOWNLOAD
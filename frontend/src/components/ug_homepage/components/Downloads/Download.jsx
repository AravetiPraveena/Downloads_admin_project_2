import { React, useState } from "react";
import Examheader from "../../../UG/Examheader";
import './styles/Downloads.css'
import Footer from "../Footer/Footer";
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
import { NavData } from "../Header/NavData";
import { Link } from "react-router-dom";
import UgDownloadDropDown from "./UgDownloadsAdmin/UgDownloadDropDown";





const Download = () => {
    

    return (
        <div>
            {/* ======== Logo Header ==================== */}
            <Examheader />
            <div className="Downloadsdiv">
                <div className="DownloadsUgdiv">
                    <h1>UG EXAMS</h1>
                    <UgDownloadDropDown/>
                    <div className="DownloadsUgButton">
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={kcetimage} alt="" />
                            </div>
                            <a href="/iitjeemaindownload">JEE(MAINS)</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={jeeMain} alt="" />
                            </div>
                            <a href="/iitjeeadvanceddownload">JEE(ADVANCED)</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={neetimage} alt="" />
                            </div>
                            <a href="/neetdownload">NEET</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={tseamcetimg} alt="" />
                            </div>
                            <a href="/ap_eapcetdownload">AP-EAPCET</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={apeapcetimg} alt="" />
                            </div>
                            <a href="/ts_eamcetdownload">TS-EAMCET</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={jeemains} alt="" />
                            </div>
                            <a href="/kcetdownload">KCET</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={mhcetimage} alt="" />
                            </div>
                            <a href="/mhcetdownload">MHCET</a>
                        </div>
                        <div className="DownloadsUgButtondiv">
                            <div className="DownloadsUgButtonimg">
                                <img src={wbjeeimage} alt="" />
                            </div>
                            <a href="/wbjeedownload">WBJEE</a>
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

export default Download
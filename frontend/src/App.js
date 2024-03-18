import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import ScrollToTop from 'react-router-scroll-top';
import Footer from "../src/components/UG/Footer";
import GATE_OTS from "./components/PG/GATE_OTS";
import { GateOts } from "./components/PG/GateOts";

// ========================================================= IMPORTED TERMS AND CONDITIONS PAGES ===========================================================
import { TERMsCONDITIONS } from "./components/UG/TERMsCONDITIONS";
import { Privacypolicy } from "./components/UG/Privacypolicy";

// ========================================================= IMPORTED LANDING PAGE ===========================================================
import { Egate } from "./Landing_PAGE/Egate";

// ========================================================= IMPORTED UG FILES ===========================================================
import UG_HOME from "./components/ug_homepage/UG_HOME";
import { IITJEE_EXAM } from "./components/UG/IITJEE_EXAM";
import OTS from "./components/UG/OTS";
import { JeeOts } from "./components/UG/JeeOts";
import OLVC from "./components/UG/IITJEE_OLVC";
import { NeetExam } from "./components/UG/NeetExam";
import { NeetOtc } from "./components/UG/NeetOtc";
import { NeetOLVC } from "./components/UG/NeetOLVC";
import { BitsatExam } from "./components/UG/BitsatExam";
import { BitsatOTC } from "./components/UG/BitsatOTC";
import { BitsatOLVC } from "./components/UG/BitsatOLVC";
import { ViteeeExam } from "./components/UG/ViteeeExam";
import { ApEamcetExam } from "./components/UG/ApEamcetExam";
import { TsEamcetExam } from "./components/UG/TsEamcetExam";
import { MhcetExam } from "./components/UG/MhcetExam";
import { KcetExam } from "./components/UG/KcetExam";
import { WbjeeExam } from "./components/UG/WbjeeExam";
import { KeamExam } from "./components/UG/KeamExam";
import { SrmJeeExam } from "./components/UG/SrmJeeExam";
import AeeeOTS from "./components/UG/AeeeOTS.jsx";

// ========================================================= IMPORTED PG FILES ===========================================================
import { Pg_home_page } from "./components/PG/PG_homePage/Pg_home_page";
import { PGGATE_Exam } from "./components/PG/PGGATE_Exam.jsx";
import { PGIITJAMExam } from "./components/PG/PGIITJAMExam.jsx";
import { Ese_ExamPage } from "./components/PG/Ese_ExamPage";
import { Pg_Tifr_ExamPage } from "./components/PG/Pg_Tifr_ExamPage";
import { Pg_Isro_ExamPage } from "./components/PG/Pg_Isro_ExamPage";

import { Pg_BARC_Exam_Page } from "./components/PG/Pg_BARC_Exam_Page";

// ========================================================= IMPORTED MBA FILES ===========================================================
import { MbaHome } from "./components/MBA/MbaHome";

// ========================================================= UNUSED IMPORTED FILES ===========================================================
import Landingpage from "../src/Landingpage";
import NEET from "./components/UG/NEET";
import { Landing } from "./Landing";
import { Ug_About } from "./components/UG/Ug_homePage_k/Ug_About/Ug_About";
import { Jee_ots } from "./components/UG/Ug ots pages/jee ots olvc/jee ots/Jee_ots";
import { PgHome } from "./components/PG/PgHome";
import LandingPage from "./NewLanding_Page/LandingPage.jsx";
import ScrollToTop from "./Landing_PAGE/ScrollToTop.js";
import Examheader from "./components/UG/Examheader.jsx";
import { JeeOTSPage } from "./components/UG/new UG OTS PAGE/JeeOTSPage.jsx";
import { ViteeeOTSPage } from "./components/UG/new UG OTS PAGE/ViteeeOTSPage.jsx";
import { Ap_EapcetOTSPage } from "./components/UG/new UG OTS PAGE/Ap_EapcetOTSPage.jsx";
import { TS_EamcetOTSPAge } from "./components/UG/new UG OTS PAGE/TS_EamcetOTSPAge.jsx";
import { MhcetOTSPage } from "./components/UG/new UG OTS PAGE/MhcetOTSPage.jsx";
import { KcetOTSPage } from "./components/UG/new UG OTS PAGE/KcetOTSPage.jsx";
import { WbjeeOTSPage } from "./components/UG/new UG OTS PAGE/WbjeeOTSPage.jsx";
import { KeamOTSPage } from "./components/UG/new UG OTS PAGE/KeamOTSPage.jsx";
import { SrmjeeOTSPage } from "./components/UG/new UG OTS PAGE/SrmjeeOTSPage.jsx";
import { State } from "./components/PG/context/State.jsx";

import Payu from "./components/Payu/Payu.jsx";
import Buttonpayu from "./components/Payu/Buttonpayu.jsx";

import AeeeExam from "./components/UG/AeeeExam.jsx";
import Metexam from "./components/UG/Metexam.jsx";
import Ap_EapcetOLVC from "./components/UG/Ap_EapcetOLVC.jsx";
import WbjeeOLVC from "./components/UG/WbjeeOLVC.jsx";
import Ts_EamcetOLVC from "./components/UG/Ts_EamcetOLVC.jsx";
import MhcetOLVC from "./components/UG/MhcetOLVC.jsx";
import Kcet_OLVC from "./components/UG/Kcet_OLVC.jsx";
import KeamOLVC from "./components/UG/KeamOLVC.jsx";
import Srmjee_OLVC from "./components/UG/Srmjee_OLVC.jsx";
import Aeee_OLVC from "./components/UG/Aeee_OLVC.jsx";
import Met_OLVC from "./components/UG/Met_OLVC.jsx";
import { Met_OTS } from "./components/UG/Met_OTS.jsx";



import CancellationRefundPolicy from "./components/UG/CancellationRefundPolicy.jsx";

// import Payubutton from "./components/Payu/Payubutton.jsx"

// import Payu from "./components/Payu/Payu.jsx";


import { ViteeeOLVC } from "./components/UG/ViteeeOLVC.jsx";
import Pg_JEST_ExamPage from "./components/PG/Pg_JEST_ExamPage.jsx";
import { GATE_OTS_PAGE } from "./components/PG/PG_homePage/Pg_Explor_Exam/PG_OTS_PAGS/GATE_OTS_PAGE.jsx";
import GATE_OLVC_Page from "./components/PG/PG_homePage/Pg_Explor_Exam/PG_OLVC_PAGES/GATE_OLVC_Page.jsx";
import { IIT_JAM_OTS_PAGE } from "./components/PG/PG_homePage/Pg_Explor_Exam/PG_OTS_PAGS/IIT_JAM_OTS_PAGE.jsx";
import IIT_JAM_OLVC from "./components/PG/PG_homePage/Pg_Explor_Exam/PG_OLVC_PAGES/IIT_JAM_OLVC.jsx";
import { EST_OTS_PAGE } from "./components/PG/PG_homePage/Pg_Explor_Exam/PG_OTS_PAGS/EST_OTS_PAGE.jsx";
import { TIFR_OTS_PAGE } from "./components/PG/PG_homePage/Pg_Explor_Exam/PG_OTS_PAGS/TIFR_OTS_PAGE.jsx";
import { ISRO_OTS_PAGE } from "./components/PG/PG_homePage/Pg_Explor_Exam/PG_OTS_PAGS/ISRO_OTS_PAGE.jsx";
import { BARC_OTS_PAGE } from "./components/PG/PG_homePage/Pg_Explor_Exam/PG_OTS_PAGS/BARC_OTS_PAGE.jsx";
import { JEST_OTS_PAGE } from "./components/PG/PG_homePage/Pg_Explor_Exam/PG_OTS_PAGS/JEST_OTS_PAGE.jsx";
import Contact from "./components/ug_homepage/components/Contact/Contact.js";
import { Pg_Countact } from "./components/PG/PG_homePage/Pg_Countact_Page/Pg_Countact.jsx";
import Faq from "./components/ug_homepage/components/Faqs/Faq.js";
import FaqPG from "./components/PG/Faqs/Faq.js";
import Download from "./components/ug_homepage/components/Downloads/Download.jsx";
import IitjeeDownloadPage from "./components/ug_homepage/components/Downloads/IitjeeDownloadPage.jsx";
import PG_DOWNLOAD from "./components/PG/PG DOWNLOADS/PG_DOWNLOAD.jsx";
import JeeAdvancedDownloadPage from "./components/ug_homepage/components/Downloads/JeeAdvancedDownloadPage.jsx";
import NeetDownloadPage from "./components/ug_homepage/components/Downloads/NeetDownloadPage.jsx";
import AP_EAPCETDownloadPage from "./components/ug_homepage/components/Downloads/AP_EAPCETDownloadPage.jsx";
import TS_EAMCETDownloadPage from "./components/ug_homepage/components/Downloads/TS_EAMCETDownloadPage.jsx";
import KcetDownloadPage from "./components/ug_homepage/components/Downloads/KcetDownloadPage.jsx";
import MhcetDownloadPage from "./components/ug_homepage/components/Downloads/MhcetDownloadPage.jsx";
import WbjeeDownloadPage from "./components/ug_homepage/components/Downloads/WbjeeDownloadPage.jsx";
import GateDownloadPage from "./components/PG/PG DOWNLOADS/GateDownloadPage.jsx";
import IitjamDownloadPage from "./components/PG/PG DOWNLOADS/IitjamDownloadPage.jsx";
import EseDownloadPage from "./components/PG/PG DOWNLOADS/EseDownloadPage.jsx";
import TifrDownloadPage from "./components/PG/PG DOWNLOADS/TifrDownloadPage.jsx";
import IsroDownloadPage from "./components/PG/PG DOWNLOADS/IsroDownloadPage.jsx";
import BarcDownloadPage from "./components/PG/PG DOWNLOADS/BarcDownloadPage.jsx";
import JestDownloadPage from "./components/PG/PG DOWNLOADS/JestDownloadPage.jsx";




















const App = () => {
  return (
    <State>
      <Router>
        <ScrollToTop />
        <Routes>


          {/* ======================================================== LANDING PAGE ================================================================ */}
          {/* This is a link for landing page */}
          <Route path="/" element={<Egate />} />

          {/* ======================================================== ALL HOME PAGES ================================================================ */}

          {/* These are the links for all Home pages */}

          {/* This is a link for UG Home page */}
          <Route path="/home" element={<UG_HOME />} />

          {/* This ia a link for PG Home page */}
          <Route path="/PgHome" element={<Pg_home_page />} />

          {/* This is a link for MBA Home page */}
          <Route path="/MbaHome" element={<MbaHome />} />


          {/* ======================================================== CONTACT US PAGES ============================================================== */}
          {/* This is a link for UG CONTACT US PAGE */}
          <Route path="/contactUs" element={<Contact />} />

          {/* This is a link for PG CONTACT US PAGE */}
          <Route path="/PgcontactUs" element={<Pg_Countact />} />

          {/* ======================================================== FAQ PAGES ============================================================== */}
          {/* This is a link for UG FAQ PAGE */}
          <Route path="/faq" element={<Faq />} />

          {/* This is a link for PG FAQ PAGE */}
          <Route path="/faqpg" element={<FaqPG />} />


          {/* ======================================================== ALL UG EXAM PAGES(INCLUDING OTS AND OLVC PAGES) ================================================================ */}

          {/* These are the links for all UG Exam pages  */}

          {/* This is the EXAM page OTS Page and OLVC page for IIT-JEE */}

          {/* This is the EXAM page for IIT-JEE */}
          <Route path="/iitjeeExam" element={<IITJEE_EXAM />} />

          {/* This is the OTS page for IIT-JEE */}
          <Route path="/iitjee_otc" element={<JeeOTSPage />} />

          {/* <Route path="/iitjee" element={<OTS />} /> */}
          {/* <Route path="/iitjee_otc" element={<JeeOts />} /> */}

          {/* This is the OLVC page for IIT-JEE */}
          <Route path="/iitjee_olvc" element={<OLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for NEET */}

          {/* This is the EXAM page for NEET */}
          <Route path="/neetexam" element={<NeetExam />} />

          {/* This is the OTS page for NEET */}
          <Route path="/neetotc" element={<NeetOtc />} />

          {/* This is the OLVC page for NEET */}
          <Route path="/neet_olvc" element={<NeetOLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for BITSAT */}

          {/* This is the EXAM page for BITSAT */}
          <Route path="/bitsatexam" element={<BitsatExam />} />

          {/* This is the OTS page for BITSAT */}
          <Route path="/bitsatots" element={<BitsatOTC />} />

          {/* This is the OLVC page for BITSAT */}
          <Route path="/bitsat_olvc" element={<BitsatOLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for VITEEE */}

          {/* This is the EXAM page for VITEEE */}
          <Route path="/viteeeexam" element={<ViteeeExam />} />

          {/* This is the OTS page for VITEEE */}
          <Route path="/VITEEE_OTS_PAGE" element={<ViteeeOTSPage />} />

          {/* This is the OLVC page for VITEEE */}
          <Route path="/VITEEE_olvc_PAGE" element={<ViteeeOLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for AP-EAPCET */}

          {/* This is the EXAM page for AP-EAPCET */}
          <Route path="/apeamcetexam" element={<ApEamcetExam />} />

          {/* This is the OTS page for AP-EAPCET */}
          <Route path="/AP-EAPCET_OTS_PAGE" element={<Ap_EapcetOTSPage />} />

          {/* This is the OLVC page for AP-EAPCET */}
          <Route path="/ApEapcetOLVC" element={<Ap_EapcetOLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for AP-EAPCET */}

          {/* This is the EXAM page for TS-EAMCET */}
          <Route path="/tseamcetexam" element={<TsEamcetExam />} />

          {/* This is the OTS page for TS-EAMCET */}
          <Route path="/TS-EMACET_OTS_PAGE" element={<TS_EamcetOTSPAge />} />

          {/* This is the OLVC page for TS-EAMCET */}
          <Route path="/TS_EamcetOLVC" element={<Ts_EamcetOLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for MHCET */}

          {/* This is the EXAM page for MHCET */}
          <Route path="/mhcetexam" element={<MhcetExam />} />

          {/* This is the OTS page for MHCET */}
          <Route path="/MHCET_OTS_PAGE" element={<MhcetOTSPage />} />

          {/* This is the OLVC page for MHCET */}
          <Route path="/Mhcet_OLVC" element={<MhcetOLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for KCET */}

          {/* This is the EXAM page for KCET */}
          <Route path="/kcetexam" element={<KcetExam />} />

          {/* This is the OTS page for KCET */}
          <Route path="/KCET_OTS_PAGE" element={<KcetOTSPage />} />

          {/* This is the OLVC page for KCET */}
          <Route path="/Kcet_OLVC" element={<Kcet_OLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for WBJEE */}

          {/* This is the EXAM page for WBJEE */}
          <Route path="/wbjeeexam" element={<WbjeeExam />} />

          {/* This is the OTS page for WBJEE */}
          <Route path="/WBJEE_OTS_PAGE" element={<WbjeeOTSPage />} />

          {/* This is the OLVC page for WBJEE */}
          <Route path="/WbjeeOLVC" element={<WbjeeOLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for KEAM */}

          {/* This is the EXAM page for KEAM */}
          <Route path="/keamexam" element={<KeamExam />} />

          {/* This is the OTS page for KEAM */}
          <Route path="/KEAM_OTS_PAGE" element={<KeamOTSPage />} />

          {/* This is the OLVC page for KEAM */}
          <Route path="/Keam_OLVC" element={<KeamOLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for SRMJEE */}

          {/* This is the EXAM page for SRMJEE */}
          <Route path="/srmjeeexam" element={<SrmJeeExam />} />

          {/* This is the OTS page for SRMJEE */}
          <Route path="/SRMJEE_OTS_PAGE" element={<SrmjeeOTSPage />} />

          {/* This is the OLVC page for SRMJEE */}
          <Route path="/Srmjee_OLVC" element={<Srmjee_OLVC />} />

          {/* This is the EXAM page OTS Page and OLVC page for AEEE */}

          {/* This is the EXAM page for AEEE */}
          <Route path="/AeeeExam" element={<AeeeExam />} />

          {/* This is the OTS page for AEEE */}
          <Route path="/AEEE_OTS_PAGE" element={<AeeeOTS />} />

          {/* This is the OLVC page for AEEE */}
          <Route path="/Aeee_OLVC" element={<Aeee_OLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for MET */}

          {/* This is the EXAM page for MET */}
          <Route path="/Metexam" element={<Metexam />} />

          {/* This is the OTS page for MET */}
          <Route path="/Met_ots" element={<Met_OTS />} />

          {/* This is the OLVC page for MET */}
          <Route path="/Met_OLVC" element={<Met_OLVC />} />


          {/* ========================================================= END OF UG EXAM LINKS ====================================================================== */}



          {/* ======================================================== ALL PG EXAM PAGES(INCLUDING OTS AND OLVC PAGES) ================================================================ */}

          {/* These are the links for all PG Exam pages  */}


          {/* This is the EXAM page OTS Page and OLVC page for GATE */}

          {/* This is the EXAM page for GATE */}
          <Route path="/pggateexam" element={<PGGATE_Exam />} />

          {/* This is the OTS page for GATE */}
          <Route path="/Gate_ots" element={<GATE_OTS_PAGE />} />

          {/* This is the OLVC page for GATE */}
          <Route path="/Gate_OLVC" element={<GATE_OLVC_Page />} />


          {/* This is the EXAM page OTS Page and OLVC page for IITJAM */}

          {/* This is the EXAM page for IITJAM */}
          <Route path="/pgiitjamexam" element={<PGIITJAMExam />} />

          {/* This is the OTS page for IITJAM */}
          <Route path="/iitjam_ots" element={<IIT_JAM_OTS_PAGE />} />

          {/* This is the OLVC page for IITJAM */}
          <Route path="/iitjam_olvc" element={<IIT_JAM_OLVC />} />


          {/* This is the EXAM page OTS Page and OLVC page for ESE */}

          {/* This is the EXAM page for ESE */}
          <Route path="/pgEse_exam" element={<Ese_ExamPage />} />

          {/* This is the OTS page for ESE */}
          <Route path="/est_ots" element={<EST_OTS_PAGE />} />


          {/* This is the EXAM page OTS Page and OLVC page for TIFR */}

          {/* This is the EXAM page for TIFR */}
          <Route path="/Ug_Tifr_ExamPage" element={<Pg_Tifr_ExamPage />} />

          {/* This is the OTS page for TIFR */}
          <Route path="/tifr_ots" element={<TIFR_OTS_PAGE />} />


          {/* This is the EXAM page OTS Page and OLVC page for ISRO */}

          {/* This is the EXAM page for ISRO */}
          <Route path="/isro_examPage" element={<Pg_Isro_ExamPage />} />

          {/* This is the OTS page for ISRO */}
          <Route path="/isro_ots" element={<ISRO_OTS_PAGE />} />


          {/* This is the EXAM page OTS Page and OLVC page for ISRO */}

          {/* This is the EXAM page for BARC */}
          <Route path="/barc_examPage" element={<Pg_BARC_Exam_Page />} />

          {/* This is the OTS page for BARC */}
          <Route path="/barc_ots" element={<BARC_OTS_PAGE />} />


          {/* This is the EXAM page OTS Page and OLVC page for JEST */}

          {/* This is the EXAM page for JEST */}
          <Route path="/jest_examPage" element={<Pg_JEST_ExamPage />} />

          {/* This is the OTS page for JEST */}
          <Route path="/jest_ots" element={<JEST_OTS_PAGE />} />

          {/* ========================================================= END OF PG EXAM LINKS ====================================================================== */}



          {/* ======================================================== UG DOWNLOADS PAGE ============================================================================= */}
          
          <Route path="/download" element={<Download />} />
          <Route path="/iitjeemaindownload" element={<IitjeeDownloadPage />} />
          <Route path="/iitjeeadvanceddownload" element={<JeeAdvancedDownloadPage />} />
          <Route path="/neetdownload" element={<NeetDownloadPage />} />
          <Route path="/ap_eapcetdownload" element={<AP_EAPCETDownloadPage />} />
          <Route path="/ts_eamcetdownload" element={<TS_EAMCETDownloadPage />} />
          <Route path="/kcetdownload" element={<KcetDownloadPage />} />
          <Route path="/mhcetdownload" element={<MhcetDownloadPage />} />
          <Route path="/wbjeedownload" element={<WbjeeDownloadPage />} />

           {/* ======================================================== END OF UG DOWNLOADS PAGE ============================================================================= */}

           {/* ======================================================== PG DOWNLOADS PAGE ============================================================================= */}
           <Route path="/pgdownload" element={<PG_DOWNLOAD />} />
          <Route path="/gatedownload" element={<GateDownloadPage />} />
          <Route path="/iitjamdownload" element={<IitjamDownloadPage />} />
          <Route path="/esedownload" element={<EseDownloadPage />} />
          <Route path="/tifrdownload" element={<TifrDownloadPage/>} />
          <Route path="/isrodownload" element={<IsroDownloadPage/>} />
          <Route path="/barcdownload" element={<BarcDownloadPage/>} />
          <Route path="/jestdownload" element={<JestDownloadPage/>} />



          

          <Route path="/terms" element={<TERMsCONDITIONS />} />
          <Route path="/CancellationRefundPolicy" element={<CancellationRefundPolicy />} />
          <Route path="/policy" element={<Privacypolicy />} />
          <Route path="/PayU" element={<Payu />} />
          <Route path='/payubutton' element={<Buttonpayu />} />
        </Routes>
        {/* <Footer /> */}
        {/* <LandingPage /> */}
      </Router>
    </State>
  );
};

export default App;

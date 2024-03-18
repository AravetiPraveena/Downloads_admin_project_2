import React from 'react'
import { FooterData } from './FooterData'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer-container footerBg'>
      <footer className='footer'>
        {FooterData.map((footerItem, footerIndex) => {
          return (
            <div key={footerIndex} className={footerItem.footerCLass}>
              <h4 className={footerItem.footerCs}>{footerItem.fotterTitles}</h4>
              <p>{footerItem.text}</p>



              <ul className='footer_links_ug' id={footerItem.footerlinksug}>
               <li>
               <a id={footerItem.footer_l} href={footerItem.PrivacyPolicy} >
                  <li>{footerItem.home}</li>
                </a>
               </li>
               <li>
               <a id={footerItem.footer_l} href={footerItem.TermsAndConditions}>
                  <li>{footerItem.about}</li>
                </a>
               </li>
                <li>
                <a id={footerItem.footer_l} href={footerItem.RefundPolicy}>
                  <li>{footerItem.career}{footerItem.icon}
                  </li>
                </a>
                </li>

               <li>
               <a id={footerItem.footer_l} href={footerItem.faqLink2}>
                  <li>{footerItem.faq}{footerItem.icon}
                  </li>
                </a>
               </li>
              </ul>

              <div className='icontsFooter'>
                <i id='footerIcons' className={footerItem.fb}></i>
                <i id='footerIcons' className={footerItem.insta}></i>
                <i id='footerIcons' className={footerItem.linkedin}></i>
                <a href="https://www.youtube.com/@eGRADTutor" target='_blank'> <i id='footerIcons' className={footerItem.youtube}></i></a>
              </div>
            </div>
          )
        })}
      </footer>
      
      <div className=' footer-linkss' style={{ textAlign: 'center', borderTop: '1px solid #fff', paddingTop: '10px', paddingBottom: '10px', color: '#fff' }}> <p style={{ margin: '0 auto' }}>Copyright © 2024 eGRADTutor All rights reserved</p>
        {/* <div className='linkIcons' style={{display: 'flex', }}>
          <div className='bgIconLink'>
          <i class="fa-brands fa-facebook"></i>
          </div>

          <div className='bgIconLink'>
          <i class="fa-brands fa-instagram"></i>          
          </div>

          <div className='bgIconLink'>
          <i class="fa-brands fa-linkedin"></i>
          </div>

          <div className='bgIconLink'>
          <i class="fa-brands fa-youtube"></i>          
          </div>
        </div>  */}
      </div>
    </div>
  )
}
export default Footer;
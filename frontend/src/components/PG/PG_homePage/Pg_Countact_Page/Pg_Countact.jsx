import React from 'react'
import './Pg_Countact.css'
import { GiPhone } from "react-icons/gi";
import { MdAttachEmail } from "react-icons/md";
import { Contact_data } from '../../../ug_homepage/components/Contact/Contact_data';
import { Nav } from '../../../UG/Nav';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import Footer from '../../../UG/Footer';

export const Pg_Countact = () => {
  return (
    <>
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
                    <Link
                      to="/PgHome"
                      className={NavData.navlist}
                      id="exam_login_menu_home"
                    >
                      <IoMdHome /> {NavData.link1}
                    </Link>
                  </li>
                  {/* <a
                    href="https://online-ug.egradtutor.in"
                    target='_blank'
                    className={NavData.login}
                  >
                    {NavData.btn1}
                  </a> */}
                </div>
              </div>
            );
          })}
        </div>

      <div id="contact">
        {Contact_data.map((Contact_data, index) => {
          return (
            <div key={index}>
              <div className="contact_data">

                <h1 className='Contact_Header'>{Contact_data.contact_title}</h1>


                <div className={Contact_data.contact_box}>
                  <div className="map">
                    <iframe src={Contact_data.map} frameborder="0"></iframe>
                  </div>
                  <div className={Contact_data.mpa_adresss}>


                    <h1 className={Contact_data.adres}>
                      {Contact_data.adress}
                    </h1>


                    <ul className='pg_contact_list' style={{}}>
                      <li style={{fontSize:'20px',padding:'7px 0'}}> {Contact_data.ad1}</li>
                      <li style={{fontSize:'20px',padding:'7px 0'}}> {Contact_data.add_1}</li>
                      <li style={{fontSize:'20px',padding:'7px 0'}}>{Contact_data.add_2}</li>
                      <li style={{fontSize:'20px',padding:'7px 0'}}>{Contact_data.add_3}</li>
                      <li style={{fontSize:'20px',padding:'7px 0'}}>{Contact_data.add_4}</li>
                      <li style={{fontSize:'20px',padding:'7px 0'}}>{Contact_data.add_5}</li>

                      <li style={{fontSize:'20px',padding:'10px 0'}}>  <span>
                        <GiPhone />  &nbsp;
                      </span>
                        {Contact_data.mobile}</li>
                      <li style={{fontSize:'20px',padding:'10px 0'}}> <span>
                        <MdAttachEmail /> &nbsp;
                      </span>
                         {Contact_data.email}</li>
                      <li></li>
                    </ul>
                  </div>

                  <div>
                    <form  className="ug_from">
                      <input type="text" className="ug_input" placeholder="FIRST NAME" />
                      <input type="text" className="ug_input" placeholder="LAST NAME" />
                      <input type="text" className="ug_input" placeholder="Your email address" />
                      <select name="" id="" placeholder="category">
                        <option className="selectplaceholder" value="">{Contact_data.category}</option>
                        <option value="">{Contact_data.op1}</option>
                        <option value="">{Contact_data.op2}</option>
                        <option value="">{Contact_data.op3}</option>
                        <option value="">{Contact_data.op4}</option>
                      </select>
                      <textarea placeholder=" Message"></textarea>
                      <input className="ug_input" type="submit" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  )
}
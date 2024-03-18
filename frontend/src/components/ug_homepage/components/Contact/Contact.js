import React from "react";
import { Contact_data } from "./Contact_data";
import { GiMailbox, GiPhone } from "react-icons/gi";
import { MdAttachEmail } from "react-icons/md";

import "./contact.css";
import Footer from "../Footer/Footer";
import Examheader from "../../../UG/Examheader";

const Contact = () => {
  return (
    <>
     <Examheader />
      <div id="contact">
        {Contact_data.map((Contact_data, index) => {
          return (
            <div key={index}>
              <div className={Contact_data.contact_sub_contcainer}>
                <h2>{Contact_data.contact_title}</h2>

                <div className={Contact_data.contact_box}>
                  <div className="map">
                    <iframe src={Contact_data.map} frameborder="0"></iframe>
                  </div>
                  <div className={Contact_data.mpa_adresss}>


                    <h1 className={Contact_data.adres}>
                      {Contact_data.adress}
                    </h1>


                    <ul style={{}}>
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
  );
};

export default Contact;

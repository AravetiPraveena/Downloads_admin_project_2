import React from "react";
import { useState } from "react";
import "./Faq.css";
import Footer from "../Footer/Footer";
import Examheader from "../../../UG/Examheader";

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle2 = (i1) => {
    // return i
    if (selected === i1) {
      return setSelected(null);
    }
    setSelected(i1);
  };
  return (
    <div>
      <Examheader />
      <div className="UG_faqdiv">
        <div className="uG_wrapper-3 ug_faq_container">
          <div className="UG_faqheading">
            <h2 className="FAQuG">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="UG_accordion2" id="faq">
            {sixtoten.map((item, i2) => (
              <div className="ug_item2">
                <div className="ug_faqtitle" onClick={() => toggle2(i2)}>
                  <h2>{item.UG_Qustion}</h2>
                  <span style={{paddingLeft: "2rem"}}>{selected === i2 ? "-" : "+"}</span>
                </div>
                <div
                  className={
                    selected === i2 ? "ug_content-show2" : "ug_content2"
                  }
                >
                  {item.UG_answer}
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default Faq;


export const Faqul = () => {
  return (
    <div>
      <ul>
        <li style={{listStyle:"disc"}}>Highly qualified faculty with 15+ years</li>
        <li style={{listStyle:"disc"}}>Majority of the faculty members are from IIT/IISc and other deemed universities.</li>
        <li style={{listStyle:"disc"}}>Faculty with experience in teaching in depth for competitive exams</li>
        <li style={{listStyle:"disc"}}>Cordial and friendly towards students</li>
      </ul>
    </div>
  )
}

const sixtoten = [
  // {
  //   UG_Qustion: "What information do we need for registration?",
  //   UG_answer: "Name, contact number, email id, password, country, city.",
  // },

  // {
  //   UG_Qustion: "Will the money be refunded?",
  //   UG_answer:
  //     "No refund will be given if a student wishes to opt out during the period of subscription. We will try to resolve any technical issues in the payment within 48 hours of credit to our account.",
  // },
  // {
  //   UG_Qustion: "Do we provide any demo tests?",
  //   UG_answer: "Yes, we provide the demo test for those who get registered.",
  // },

  // {
  //   UG_Qustion: "Are there any discount/coupons available for OTS?",
  //   UG_answer:
  //     "Yes, if you are referred by any of our faculty. You can use the same while making the payment.",
  // },

  // {
  //   UG_Qustion:
  //     " I did not get my answer from the above FAQs, whom should I contact?",
  //   UG_answer:
  //     "In case you didn’t get the information, you are looking for, you can contact the eGRADTutor Helpdesk number: +91-7993270532, Email: Info@egradtutor.in.",
  // },
  // {
  //   UG_Qustion: "What is the mode of registration?",
  //   UG_answer: "Registration mode will be online.",
  // },
  // {
  //   UG_Qustion: "What is the mode of payment?",
  //   UG_answer:
  //     "Payment can be done through debit card, credit card, UPI, Net banking.",
  // },
  // {
  //   UG_Qustion: "What if the money debited and the test is not accessible?",
  //   UG_answer:
  //     "Please contact our web team -info@egradtutor.in they will try to resolve it in 24 hours.",
  // },
  // {
  //   UG_Qustion: " Do we need to make a payment to get registered?",
  //   UG_answer:
  //     "No. Registration is free of cost, and you need to make payment only when you subscribe to any of our products.",
  // },
  // {
  //   UG_Qustion: "Who created the test series?",
  //   UG_answer:
  //     "These tests are created by top faculty across India who have 10+Years of experience and by the graduates from IIT/ IISC, IISER.",
  // },

  {
    UG_Qustion: "What will be the validity of the course?",
    UG_answer: "The validity of the course depends upon the online course enrolled in.",
  },
  {
    UG_Qustion: "Which online courses are offered by eGRADTutor?",
    UG_answer: "eGRADTutor offers various short term and long term online courses for the preparation of various competitive exams like JEE (Mains & Advanced) Exam, NEET, BITSAT, VITEEE and other state level examinations. We also offer live and self-paced courses for PG entrance exams like GATE, IITJAM and JEST.",
  },
  {
    UG_Qustion: "Is there any refund policy?",
    UG_answer: "Online courses are non-refundable and non-transferable.",
  },
  {
    UG_Qustion: "Will the tests be conducted regularly according to the topics completed in each subject?",
    UG_answer: "Yes. Please check the schedule of Online test series provided in the course webpage.",
  },
  {
    UG_Qustion: "Will study material and reference textbooks be provided to the students ?",
    UG_answer: "We provide updated study materials and reference textbooks to the students as part of the course fee. The materials and the reference books will be sent by post in a phase manner to all the students.",
  },
  {
    UG_Qustion: "Can we know the background of the faculty at eGRADTutor?",
    UG_answer: <Faqul />,
  },
  {
    UG_Qustion: "After completion of any subject, how students will get clear their doubts cleared further? How can students interact with the faculty to clarify their doubts?",
    UG_answer: "Every Saturday and Sunday there will be special doubt sessions for the topics discussed in the week. Our faculty will be available for on-one doubt discussion via online mode only if the students require. The students are free to approach them for doubt clearing. Further you can send by mail your doubts. We clear your doubts at the earliest.",
  },
  {
    UG_Qustion: "Whether the teaching will be provided from the basics level or not for them to understand easily?",
    UG_answer: "All the teaching will be done from scratch. We do understand the student level and plan so that he can rise to the level of writing exam confidently. We teach from basics to the depth required for a particular exam.",
  },
  {
    UG_Qustion: "Can Parents know about the online tests results regarding the students' marks, position and their performance?",
    UG_answer: "Yes. The test result report will be sent to the parent contact. However,The results of the online tests are available in the students' individual accounts.",
  },
  {
    UG_Qustion: "My son is an average student, and his aggregate marks are very low in the qualifying degree/standard. Can he join eGRADTutor? Is there any discrimination based on percentage?",
    UG_answer: "eGRADTutor never discriminates based on percentage. We never give admission on a percentage basis. Here uniform attention is given to all students irrespective of the marks.  However, if the student is irregular, he will be asked to leave and discontinue the course. No fee refund will be given in these circumstances.",
  },
  {
    UG_Qustion: "I took admission, but then I never attended a single class, I want to get my amount refunded?",
    UG_answer: "No Refund of Fee shall be applicable under any circumstances.",
  },
  {
    UG_Qustion: "I took admission couple of months back, but I got job - Can I get my fee refunded or can I replace a friend in my seat?",
    UG_answer: "No Refund of Fee shall be applicable under any circumstances.",
  },
  {
    UG_Qustion: "Do you provide any Demo classes?",
    UG_answer: "Yes, we do not provide demo and course intro classes.",
  },
];






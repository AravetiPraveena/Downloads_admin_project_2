import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../UG/terms.css'
import Examheader from './Examheader'
const CancellationRefundPolicy = () => {
  return (
    <div> 
 {/* <Header/> */}
 <Examheader />
        <div className='carf container'>
    <p><b>CANCELLATION & REFUND POLICY :</b>
    <ul className='termsul'>
      <li>We do not accept cancellation of the order or refund claims.</li>
      <li> We do not accept refund for damaged shipment, if the shipment is damaged bring it to our notice and provide proof for the replacement of shipment.</li>
      <li>If the amount is debited more than once for the same order please bring it to our notice. If we receive the amount more than once for the same order then we will refund the extra amount if we do not receive the extra transaction amount then you have to contact your bank for the refund.</li>
    </ul>
    </p></div>
    <Footer />
    </div>
  )
}

export default CancellationRefundPolicy
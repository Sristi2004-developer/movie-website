


import React, { useState } from 'react';
import {collection,addDoc} from 'firebase/firestore'
import {db} from './firebase'
import './PaymentModal.css';

const PaymentModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [successMessage,setSuccessMessage]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
   try{
    await addDoc(collection(db,'payments'),
  {
    email,
    cardNumber,
    expiryDate,
    cvv
  })
  console.log('Payment data saved successfully')
  setSuccessMessage('Payment processed successfully!');
  setTimeout(()=>{
    setSuccessMessage('')
    onRequestClose();
  },2000);
   }catch(error){
    console.error('Error saving payment data:',error)
    setSuccessMessage('Error processing payment.Please try again')
   }
  
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onRequestClose}></div>
      <div className="modal">
        <h2>Payment Process</h2>
        {successMessage && 
        <p>{successMessage}</p>}
        {!successMessage && (
          <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Expiry Date:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </label>
          <button type="submit">Pay</button>
        </form>
        )}
        {!successMessage && 
        <button onClick={onRequestClose}>Close</button>}
      </div>
    </>
  );
};

export default PaymentModal;

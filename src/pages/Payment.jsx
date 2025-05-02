import React, { useState } from 'react'

const Payment = () => {

    const [phone, setPhone] = useState('');
    const [amount, setAmount] =useState('');
    const [loading, setLoading] =useState(false);
    const [payment, setPayment] = useState('');


    const handlePayment = () => {
        e.preventDefault();
        setLoading(true);
        setPaymentStatus('');


        try {
            const rensponse = await fetch('http://localhost:5000/api/mpesa/stkpush', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                }

            })
        }


    }
  return (
    <div>
      
    </div>
  )
}

export default Payment

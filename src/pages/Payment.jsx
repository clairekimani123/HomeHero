import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Payment = () => {

    const [phone, setPhone] = useState('');
    const [amount, setAmount] =useState('');
    const [loading, setLoading] =useState(false);
    const [payment, setPayment] = useState('');


    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setPaymentStatus('');


        try {
            const response = await fetch('http://localhost:3001/api/mpesa/stkpush', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({phone, amount}),
                
            });

            const data = await response.json()

            

            if (response.ok) {
                setPayment('Payment request sent. Check your phone.');    
            }else {
                setPayment(data.error || 'payment failed. Try again.');

            } 
        } catch (error) {
            setPayment('(Error:', + error.message);

        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">Pay with M-Pesa</h2>

        <form onSubmit={handlePayment} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input 
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 254717793977"
                    className="w-full border px-3 py-2 rounded"
                    required
                 />
            </div>
            <div>
                <label className="block text-sm font-medium">Amount</label>
                <input 
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="eg.100"
                    className="w-full border px-3 py-2 rounded"
                    required
                 />
            </div>

                 <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded"
                  disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>  
        </form>

        {payment && (
            <div className="mt-4 text-center text-sm text-blue-600">{payment}</div>
        )}  
    </div>
  );
};

export default Payment;

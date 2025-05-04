const express = require('express');
const cors = require('cors');
const app =express();
const PORT = 3001;


app.use(cors());
app.use(express.json());

//Mock database (in-memory)
let transactions = [];

//Mock M-Pesa STK Push route
app.post('/api/mpesa/stkpush', (req, res) => {
    const {phone, amount} = req.body;

    if (!phone || !amount) {
        return res.status(400).json({error: 'Missing phone or amount.'});

    }
    //Simulate transaction
    const transaction = {
        id: Date.now(),
        phone,
        amount,
        status: 'Success',
        message: 'Payment request sent. Check your phone.'
    };

    console.log('Payment request received:', transaction);

    //Save it to mock DB
    transactions.push(transaction);

    //Simulate delay like real API 
    setTimeout(() => {
        res.status(200).json({
            message: transaction.message,
            transaction
        });
    }, 1500);
});

app.listen(PORT, () => {
    console.log(`Mock M_Pesa  running`)
})
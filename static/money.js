// Example backend endpoint (Node.js/Express)
app.post('/process-payment', async (req, res) => {
  const { token, amount, customerDetails, orderItems } = req.body;
  
  try {
    // Process payment with Yoco
    const response = await fetch('https://payments.yoco.com/api/charges', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer sk_live_9b2e3688lVgA6OP50a74c6aa492f`, // Your live secret key
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token,
        amountInCents: amount,
        currency: 'ZAR'
      })
    });
    
    if (response.ok) {
      // Save order to database
      // Send confirmation email
      // Update inventory
      res.json({ success: true, orderId: 'ORD-' + Date.now() });
    }
  } catch (error) {
    res.status(500).json({ error: 'Payment processing failed' });
  }
});
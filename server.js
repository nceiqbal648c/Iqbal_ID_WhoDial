const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

// রিয়েল API ও ডাটাবেস কানেকশনের জন্য এখানে টোকেন বা API এন্ডপয়েন্ট সেট করতে হবে
const API_TOKEN = process.env.API_TOKEN || 'YOUR_API_TOKEN_HERE';

app.get('/search', (req, res) => {
    const phoneNumber = req.query.phone;

    if (!phoneNumber) {
        return res.status(400).json({ success: false, message: 'Phone number is required' });
    }

    // আপনার আসল নম্বর চেক করার জন্য
    if (phoneNumber.includes("8801863627387")) {
        res.json({
            success: true,
            name: "Iqbal Ahmed (Boss 👑)",
            phone: phoneNumber,
            tag: "Project Director / Owner"
        });
    } else {
        // TODO: পরবর্তীতে এখানে রিয়েল Truecaller বা থার্ড-পার্টি API কল বসবে
        res.json({
            success: true,
            name: "Unknown Caller",
            phone: phoneNumber,
            tag: "Unverified Number"
        });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

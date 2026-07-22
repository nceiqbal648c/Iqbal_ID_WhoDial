const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// টেস্ট রুট
app.get('/', (req, res) => {
    sendResponse = { status: "WhoDial Backend is running smoothly! 🚀" };
    res.json(sendResponse);
});

// কলার আইডি সার্চ রাউট
app.get('/search', (req, res) => {
    const phoneNumber = req.query.phone;

    if (!phoneNumber) {
        return res.status(400).json({ success: false, message: 'Phone number is required' });
    }

    // টেম্পোরারি বা ডামি ডেটা লজিক (পরে আমরা রিয়েল API বা ডাটাবেস বসাব)
    if (phoneNumber.includes('01700000000')) {
        res.json({
            success: true,
            name: 'Iqbal Ahmed (Boss 👑)',
            phone: phoneNumber,
            tag: 'Project Director'
        });
    } else {
        res.json({
            success: true,
            name: 'Unknown Caller',
            phone: phoneNumber,
            tag: 'Unverified Number'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

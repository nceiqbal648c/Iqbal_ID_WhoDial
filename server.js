const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

// রিয়েল API ডাটাবেস কানেকশনের জায়গা (পরে এখানে ডাটাবেস বা থার্ড-পার্টি API যুক্ত করা হবে)

app.get('/search', (req, res) => {
    const phoneNumber = req.query.phone;

    if (!phoneNumber) {
        return res.status(400).json({ success: false, message: 'Phone number is required' });
    }

    // TODO: পরবর্তীতে এখানে রিয়েল ডাটাবেস বা API কুয়েরি বসানো হবে
    if (phoneNumber.includes("8801929979235")) {
        res.json({
            success: true,
            name: "Iqbal Ahmed (Boss 👑)",
            phone: phoneNumber,
            tag: "Project Director"
        });
    } else {
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

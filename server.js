const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// সঠিক পাথ কনফিগারেশন
app.use(express.static(path.join(__dirname)));

app.get('/search', (req, res) => {
    const phone = req.query.phone;

    if (phone === "+8801929979235") {
        res.json({
            name: "Iqbal Ahmed",
            phone: phone,
            tag: "Verified Creator 👑"
        });
    } else {
        res.json({
            name: "Unknown Caller",
            phone: phone,
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

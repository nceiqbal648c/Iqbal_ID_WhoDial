const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// স্ট্যাটিক ফাইলগুলো ব্যবহারের জন্য
app.use(express.static(__dirname));

// সার্চ এপিআই রাউট
app.get('/search', (req, res) => {
    const phone = req.query.phone;

    // এখানে আপনার ডেটাবেস বা নম্বর লিস্ট চেক করার লজিক থাকবে
    // সাময়িকভাবে টেস্ট করার জন্য বা যেকোনো নম্বরের রেসপন্স পেতে:
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

// রুট ইউআরএলে index.html পাঠানোর জন্য
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
